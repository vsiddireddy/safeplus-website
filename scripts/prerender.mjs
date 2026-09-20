// Build-time prerendering: renders each public route with headless Chrome and
// writes the fully-rendered HTML back into dist/, so crawlers that don't run
// JavaScript still see the real content.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

// Public, indexable routes. Add new marketing pages here.
export const ROUTES = ["/"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    let filePath = path.join(DIST, urlPath);
    if (!filePath.startsWith(DIST)) {
      res.writeHead(403).end();
      return;
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const indexFile = path.join(filePath, "index.html");
      filePath = fs.existsSync(indexFile) ? indexFile : path.join(DIST, "index.html");
    }
    const body = fs.readFileSync(filePath);
    res.writeHead(200, { "content-type": MIME[path.extname(filePath)] ?? "application/octet-stream" });
    res.end(body);
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port }));
  });
}

function outputPath(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

const { server, port } = await startServer();
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

let failed = false;

try {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    const url = `http://127.0.0.1:${port}${route}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    await page.waitForFunction(() => {
      const root = document.getElementById("root");
      return root && root.children.length > 0 && root.innerText.trim().length > 200;
    }, { timeout: 30000 });

    // Keep the shipped HTML theme-neutral; the inline no-flash script in
    // index.html decides the theme class before React mounts.
    await page.evaluate(() => {
      document.documentElement.classList.remove("dark");
    });

    const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
    const rootText = await page.evaluate(() => document.getElementById("root").innerText.trim().length);

    if (rootText < 200) {
      console.error(`✗ ${route} rendered no meaningful content`);
      failed = true;
    } else {
      const out = outputPath(route);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html);
      console.log(`✓ prerendered ${route} → ${path.relative(DIST, out)} (${(html.length / 1024).toFixed(1)} KB, ${rootText} chars of text)`);
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}

if (failed) process.exit(1);
