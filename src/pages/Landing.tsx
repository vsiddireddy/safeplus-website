import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  FileText,
  Sparkles,
  Share2,
  BarChart3,
  Palette,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero-dashboard.png.asset.json";
import logo from "@/assets/logo.png";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description:
      "Generate polished, persuasive proposal content in seconds with built-in AI assistance.",
  },
  {
    icon: Share2,
    title: "One-Click Sharing",
    description:
      "Send branded proposals via a secure link — no attachments, no friction.",
  },
  {
    icon: BarChart3,
    title: "Engagement Tracking",
    description:
      "Know the moment a client opens, reads, or accepts your proposal in real time.",
  },
  {
    icon: Palette,
    title: "Branded Templates",
    description:
      "Start from beautiful, customizable templates that match your company's identity.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together on proposals with role-based access and department organization.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description:
      "Track win rates, response times, and proposal performance across your team.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create",
    description:
      "Pick a template, customize your content with AI help, and add your pricing.",
  },
  {
    num: "02",
    title: "Send",
    description:
      "Share a branded link with your client — they view it instantly in their browser.",
  },
  {
    num: "03",
    title: "Win",
    description:
      "Track engagement in real time, get notified on acceptance, and close the deal.",
  },
];

const logos = [
  "Acme Corp",
  "TechStart",
  "Global Media",
  "BrightPath",
  "Zenith",
];

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [user, loading, navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SafePlus logo" className="h-8 w-8 rounded-lg object-cover" />
            <span className="font-display text-lg font-bold text-foreground">
              SafePlus
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
              Sign in
            </Button>
            <Button size="sm" onClick={() => navigate("/signup")}>
              Get started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Now with AI-powered content writing
            </div> */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block" style={{ color: "#f48e39" }}>Your digital vault for</span>
              <span className="block whitespace-nowrap" style={{ color: "#e15821" }}>cards, docs, and passwords</span>
            </h1>

            {/* Feature points */}
            {/* <div className="mt-[42px] grid grid-cols-2 gap-[10.26px] sm:grid-cols-4 sm:gap-[13.68px]">
              {[
                {
                  label: "On-Device\nOnly",
                  svg: (
                    <path d="M10.75 4.25H13.25M7.75 22.25H16.25C17.3546 22.25 18.25 21.3546 18.25 20.25V3.75C18.25 2.64543 17.3546 1.75 16.25 1.75H7.75C6.64543 1.75 5.75 2.64543 5.75 3.75V20.25C5.75 21.3546 6.64543 22.25 7.75 22.25Z" />

                  ),
                },
                {
                  label: "Smart Card/Doc Scanner",
                  svg: (
                    <>
                      <path d="M8 4H7C5.34315 4 4 5.34315 4 7V8" />
                      <path d="M16 4H17C18.6569 4 20 5.34315 20 7V8" />
                      <path d="M20 16V17C20 18.6569 18.6569 20 17 20H16" />
                      <path d="M8 20H7C5.34315 20 4 18.6569 4 17V16" />
                      <path d="M9 10H15" />
                      <path d="M9 14H13" />
                    </>
                  ),
                },
                {
                  label: "Expiration\nReminders",
                  svg: (
                    <>
                      <path d="M2.75879 10.1637L3.62703 15.0877C3.91474 16.7194 5.47072 17.8089 7.1024 17.5212L10.0972 16.9931M2.75879 10.1637L2.58514 9.17888C2.29743 7.5472 3.38694 5.99122 5.01862 5.70351L11.9123 4.48797C13.544 4.20026 15.0999 5.28977 15.3876 6.92145C15.4835 7.46535 15.1204 7.984 14.5765 8.07991L2.75879 10.1637Z" />
                      <path d="M16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20Z" />
                      <path d="M16 12V14L17.6667 15.6667" />
                    </>
                  ),
                },
                {
                  label: "Face & Fingerprint\nLock",
                  svg: (
                    <path d="M6.40519 19.0481C6.58912 18.6051 6.75832 18.1545 6.91219 17.6969M14.3433 20.6926C14.6095 19.9418 14.8456 19.1768 15.0502 18.399C15.2359 17.6934 15.3956 16.9772 15.5283 16.2516M19.4477 17.0583C19.8121 15.0944 20.0026 13.0694 20.0026 11C20.0026 6.58172 16.4209 3 12.0026 3C10.7472 3 9.55932 3.28918 8.50195 3.80456M3.52344 15.0245C3.83663 13.7343 4.00262 12.3865 4.00262 11C4.00262 9.25969 4.55832 7.64917 5.50195 6.33621M12.003 11C12.003 13.7604 11.5557 16.4163 10.7295 18.8992C10.5169 19.5381 10.2792 20.1655 10.0176 20.7803M7.71227 14.5C7.90323 13.3618 8.00262 12.1925 8.00262 11C8.00262 8.79086 9.79348 7 12.0026 7C14.2118 7 16.0026 8.79086 16.0026 11C16.0026 11.6166 15.9834 12.2287 15.9455 12.8357" />
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-12 w-12 text-foreground"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.svg}
                  </svg>
                  <p className="mt-3 text-base font-semibold text-foreground whitespace-pre-line">{item.label}</p>
                </div>
              ))}
            </div> */}

            <p className="mx-auto mt-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Create, send, and track stunning proposals that close. QuoteKit
              gives your team the tools to look professional and move fast.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#" aria-label="Download on the App Store" className="inline-block transition-transform hover:scale-105">
                <img src={appStoreBadge} alt="Download on the App Store" className="h-14 w-auto" />
              </a>
              <a href="#" aria-label="Get it on Google Play" className="inline-block transition-transform hover:scale-105">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-14 w-auto" />
              </a>
            </div>


          </div>

          {/* Hero image */}
          <div className="relative mx-auto mt-16 max-w-5xl animate-fade-in">
            <div className="rounded-xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
              <img
                src={heroAsset.url}
                alt="QuoteKit proposal dashboard showing a professional proposal with pricing, status tracking, and client notifications"
                className="w-full rounded-lg"
                loading="eager"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-border bg-muted/50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
            Trusted by 500+ teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {logos.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-muted-foreground/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Everything you need to win
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From drafting to tracking, QuoteKit handles every step of the
              proposal workflow.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Three steps to close
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              QuoteKit makes your proposal process effortless.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-xl font-bold">
                  {s.num}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist / value props */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why teams switch to QuoteKit
            </h2>
            <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {[
                "Close deals 40% faster",
                "Professional proposals in minutes",
                "Real-time open & view tracking",
                "AI writes your first draft",
                "Team-wide template library",
                "No more email attachments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent to-primary/5" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Ready to send proposals that win?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Join hundreds of teams already using QuoteKit to close more deals.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base w-full sm:w-auto"
              onClick={() => navigate("/signup")}
            >
              Get started — it's free
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base w-full sm:w-auto"
              onClick={() => navigate("/login")}
            >
              Sign in
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SafePlus logo" className="h-6 w-6 rounded-md object-cover" />
            <span className="font-display text-sm font-semibold text-foreground">
              SafePlus
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SafePlus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
