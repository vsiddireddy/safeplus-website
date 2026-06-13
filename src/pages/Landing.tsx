import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
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
  IdCard,
  BookUser,
  ScrollText,
  CreditCard,
  Gift,
  Award,
  Receipt,
  Car,
  HeartPulse,
  Plane,
  Globe2,
  Home,
  Landmark,
  KeyRound,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";
import appHome from "@/assets/app-home.png";
import appPasswords from "@/assets/app-passwords.png";
import appCard from "@/assets/app-card.png";
import appIdDetail from "@/assets/app-id-detail.png.asset.json";
import appGiftcard from "@/assets/app-giftcard.png.asset.json";
import appPasswordDetail from "@/assets/app-id-passport-detail.png.asset.json";
import appCardDetail from "@/assets/app-card-detail.png.asset.json";
import appLocked from "@/assets/app-locked.png.asset.json";
import frameIos from "@/assets/frame-ios.png.asset.json";
import frameAndroid from "@/assets/frame-android.png.asset.json";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description: "Generate polished, persuasive proposal content in seconds with built-in AI assistance.",
  },
  {
    icon: Share2,
    title: "One-Click Sharing",
    description: "Send branded proposals via a secure link — no attachments, no friction.",
  },
  {
    icon: BarChart3,
    title: "Engagement Tracking",
    description: "Know the moment a client opens, reads, or accepts your proposal in real time.",
  },
  {
    icon: Palette,
    title: "Branded Templates",
    description: "Start from beautiful, customizable templates that match your company's identity.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together on proposals with role-based access and department organization.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track win rates, response times, and proposal performance across your team.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create",
    description: "Pick a template, customize your content with AI help, and add your pricing.",
  },
  {
    num: "02",
    title: "Send",
    description: "Share a branded link with your client — they view it instantly in their browser.",
  },
  {
    num: "03",
    title: "Win",
    description: "Track engagement in real time, get notified on acceptance, and close the deal.",
  },
];

const storedItems = [
  { name: "Driver's Licenses", icon: IdCard },
  { name: "Passports", icon: BookUser },
  { name: "Birth & Marriage Certificates", icon: ScrollText },
  { name: "Credit & Debit Cards", icon: CreditCard },
  { name: "Gift Cards", icon: Gift },
  { name: "Loyalty & Membership", icon: Award },
  { name: "Receipts", icon: Receipt },
  { name: "Vehicle Registration", icon: Car },
  { name: "Health Documents", icon: HeartPulse },
  { name: "Boarding Passes", icon: Plane },
  { name: "Known Travel Number", icon: Globe2 },
  { name: "Lease & Rental Documents", icon: Home },
  { name: "Mortgage Documents", icon: Landmark },
  { name: "Passwords", icon: KeyRound },
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
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SafePlus logo" className="h-8 w-8 rounded-lg object-cover" />
            <span className="font-display text-lg font-bold text-foreground">SafePlus</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#security" className="hover:text-primary transition-colors">
              Security
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#blog" className="hover:text-primary transition-colors">
              Blog
            </a>
          </div>
          {/* <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
              Sign in
            </Button>
            <Button size="sm" onClick={() => navigate("/signup")}>
              Get started
            </Button>
          </div> */}
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
              <span className="block" style={{ color: "#f48e39" }}>
                Your personal local vault{" "}
              </span>
              <span className="block whitespace-nowrap" style={{ color: "#e15821" }}>
                for everything important
              </span>
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
              Store IDs, cards, documents, passwords, and more all securely on your device. Private by design. Your data
              never leaves your phone.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-block transition-transform hover:scale-105"
              >
                <img src={appStoreBadge} alt="Download on the App Store" className="h-[53px] w-auto" />
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-block transition-transform hover:scale-105"
              >
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-[53px] w-auto" />
              </a>
            </div>
          </div>

          {/* Hero phone showcase */}
          <div className="relative mx-auto mt-20 flex max-w-5xl items-end justify-center animate-fade-in">
            <img
              src={appCard}
              alt="SafePlus card detail"
              className="relative z-10 w-[44%] max-w-[380px] -mr-[10%] mb-10 -rotate-[10deg] drop-shadow-2xl"
              loading="lazy"
            />
            <img
              src={appHome}
              alt="SafePlus home dashboard"
              className="relative z-20 w-[50%] max-w-[440px] drop-shadow-2xl"
              loading="eager"
            />
            <img
              src={appPasswords}
              alt="SafePlus passwords screen"
              className="relative z-10 w-[44%] max-w-[380px] -ml-[10%] mb-10 rotate-[10deg] drop-shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Social proof - commented out
      <section className="relative overflow-hidden border-y border-border py-14" style={{ background: "linear-gradient(180deg, rgba(225,88,33,0.08) 0%, rgba(225,88,33,0.18) 100%)" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 60%)" }} />
        <div className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#f48e39" }}>
            Store and protect all your essentials
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {storedItems.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-display text-base font-semibold shadow-sm"
                style={{ color: "#e15821" }}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                {name}
              </span>
            ))}
          </div>
        </div>
        </div>
      </section>
      */}

      {/* Features */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Scan once, copy anytime
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Cards and documents are automatically organized into labeled fields. Card numbers, CVVs, license and passport numbers are ready to copy with a tap.
          </p>
          <div className="relative mx-auto mt-12 w-[90%] overflow-hidden rounded-3xl bg-[#eef0f3] sm:w-[80.4%]">
            <div className="grid items-center gap-4 md:grid-cols-[3fr_2fr]">
              <div className="px-8 py-12 sm:px-14 md:py-24 md:px-10">
                <h3 className="max-w-[560px] font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Keep your driver's license, passport, and IDs ready the moment you need them.
                </h3>
              </div>
              <div className="relative h-[420px] sm:h-[480px] md:h-[560px]">
                <img
                  src={appIdDetail.url}
                  alt="SafePlus ID detail screen"
                  className="absolute left-1/2 top-6 w-[280px] max-w-none -translate-x-1/2 sm:w-[340px] md:left-auto md:right-10 md:translate-x-0 md:w-[320px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Second row - two half-width cards */}
          <div className="mx-auto mt-6 grid w-[90%] gap-6 sm:w-[80.4%] md:grid-cols-2">
            {/* Left card - Card details */}
            <div className="relative overflow-hidden rounded-3xl bg-[#eef0f3]">
              <div className="flex flex-col items-start px-8 pt-12 sm:px-10 sm:pt-14">
                <h3 className="font-display text-center text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Secure card details, ready to copy.
                  <br />
                </h3>
                <div className="mt-8 w-full max-w-[360px] self-center overflow-hidden aspect-[2/3]">
                  <img
                    src={appCardDetail.url}
                    alt="SafePlus card detail screen"
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right card - Gift card alerts */}
            <div className="relative overflow-hidden rounded-3xl bg-[#eef0f3]">
              <div className="flex flex-col items-start px-8 pt-12 sm:px-10 sm:pt-14">
                <h3 className="font-display text-center text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Never lose track of a password again.
                </h3>
                <div className="mt-8 w-full max-w-[360px] self-center overflow-hidden aspect-[2/3]">
                  <img
                    src={appPasswordDetail.url}
                    alt="SafePlus password detail screen"
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third row - all other items */}
          <div className="mx-auto mt-6 w-[90%] sm:w-[80.4%] overflow-hidden rounded-3xl bg-[#eef0f3] px-8 py-12 sm:px-14 sm:py-14">
            <h3 className="text-center font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              And so much more.
            </h3>
            <div className="mt-10 grid grid-cols-2 auto-rows-fr gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                { name: "Birth & Marriage Certificates", icon: ScrollText, color: "#f48e39" },
                { name: "Gift Cards", icon: Gift, color: "#f48e39" },
                { name: "Loyalty & Membership", icon: Award, color: "#f48e39" },
                { name: "Receipts", icon: Receipt, color: "#f48e39" },
                { name: "Vehicle Registration", icon: Car, color: "#f48e39" },
                { name: "Health Documents", icon: HeartPulse, color: "#e15821" },
                { name: "Boarding Passes", icon: Plane, color: "#e15821" },
                { name: "Known Travel Number", icon: Globe2, color: "#e15821" },
                { name: "Lease & Rental Documents", icon: Home, color: "#e15821" },
                { name: "Mortgage Documents", icon: Landmark, color: "#e15821" },
              ].map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex h-full flex-col items-center gap-6 rounded-2xl px-4 py-5 text-center shadow-sm transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: color }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <span className="font-display text-sm font-semibold leading-snug text-white">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="security" className="bg-muted/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Download with Confidence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Only you can access your data, never SafePlus. Nothing is stored on servers or the cloud, and no account
              or email is required.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              className="flex min-h-[180px] flex-col justify-between rounded-2xl p-6"
              style={{ backgroundColor: "#f48e39" }}
            >
              <Lock className="h-8 w-8 text-white" strokeWidth={2} />
              <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                App access requires facial recognition, fingerprint, or PIN.
              </p>
            </div>
            <div
              className="flex min-h-[180px] flex-col justify-between rounded-2xl p-6"
              style={{ backgroundColor: "#e15821" }}
            >
              <KeyRound className="h-8 w-8 text-white" strokeWidth={2} />
              <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                AES-256 on-device encryption protects your stored data.
              </p>
            </div>
          </div>

          {/* Hide sensitive details block */}
          <div className="mx-auto mt-4 max-w-[620px] overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="grid items-center gap-4 sm:grid-cols-2">
              <div className="relative h-[330px] sm:h-[400px] overflow-hidden flex justify-end pr-2 sm:pr-0">
                <img
                  src={appLocked.url}
                  alt="SafePlus app locked screen"
                  className="absolute top-12 right-2 sm:right-0 w-[185px] sm:w-[218px] max-w-none"
                  loading="lazy"
                />
              </div>
              <div className="pl-2 pr-8 pb-8 sm:pl-4 sm:pr-10 sm:py-10">
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
                  Automatically locks after a period of inactivity that you can adjust.
                </h3>
              </div>
            </div>
          </div>
          {/* Steps grid — temporarily hidden
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-xl font-bold">
                  {s.num}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card">
            <HelpCircle className="h-7 w-7 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <h2 className="mt-6 text-center font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible defaultValue="item-0" className="mt-10 w-full">
            {[
              {
                q: "What devices does SafePlus support?",
                a: "SafePlus supports iPhone, iPad, Android phones, and Android tablets, allowing you to securely access your information across your preferred mobile devices.",
              },
              {
                q: "Is SafePlus free?",
                a: "Yes. SafePlus is completely free to use with unlimited access to store cards, documents, and passwords. There are no subscriptions, no paywalls, and no ads.",
              },
              {
                q: "How is my data protected?",
                a: "Your data never leaves your device. So only you can see your data. Additionally, SafePlus has on-device encryption for each card, document, and password.",
              },
              {
                q: "Will SafePlus send me reminders before my cards and documents expire?",
                a: "Yes. SafePlus sends reminders before your cards and documents expire.",
              },
              {
                q: "What type of data can I store?",
                a: "You can store driver's licenses, IDs, passports, credit & debit cards, loyalty & membership cards, receipts, boarding passes, and much more. Essentially, any card or document can be scanned and stored in SafePlus.",
              },
              {
                q: "What is the difference between SafePlus and other wallet apps?",
                a: "SafePlus combines secure storage for cards, documents, and passwords in one app. Unlike many wallet apps, SafePlus stores your data locally on your device, requires no account, has no subscriptions, no paywalls, and no ads.",
              },
              /*
              {
                q: "What happens if my subscription expires?",
                a: "Your existing data stays safe and accessible. Premium features are paused until you renew, but you'll never lose access to anything you've saved.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes. You can try SafePlus+ free, and the core app is always free to use with no account required.",
              },
              */
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Download app */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto w-[75%] rounded-3xl bg-muted/60 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
              <div className="max-w-md">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Take SafePlus with you,
                  <br />
                  wherever you go
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Your cards, documents, and passwords stay secure and instantly accessible on iOS and Android.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={frameIos.url}
                    alt="Scan to download SafePlus on the App Store"
                    className="h-[250px] w-[250px] object-contain"
                    loading="lazy"
                  />
                  <a href="#" aria-label="Download on the App Store" className="-mt-12">
                    <img src={appStoreBadge} alt="Download on the App Store" className="h-10" />
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={frameAndroid.url}
                    alt="Scan to get SafePlus on Google Play"
                    className="h-[250px] w-[250px] object-contain"
                    loading="lazy"
                  />
                  <a href="#" aria-label="Get it on Google Play" className="-mt-12">
                    <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — commented out
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent to-primary/5" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Ready to send proposals that win?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Join hundreds of teams already using SafePlus to close more deals.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto" onClick={() => navigate("/signup")}>
              Get started — it&apos;s free
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
      */}

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SafePlus logo" className="h-6 w-6 rounded-md object-cover" />
            <span className="font-display text-sm font-semibold text-foreground">SafePlus</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SafePlus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
