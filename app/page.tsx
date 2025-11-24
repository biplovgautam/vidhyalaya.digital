"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type MotionStyle } from "framer-motion";
import {
  BookOpenCheck,
  GraduationCap,
  LineChart,
  MonitorSmartphone,
  ShieldCheck,
  Users2,
} from "lucide-react";

const stats = [
  {
    label: "Registered schools",
    value: "100+",
    detail: "across 30 districts",
  },
  {
    label: "Students connected",
    value: "50k+",
    detail: "daily active learners",
  },
  { label: "Records digitized", value: "1.2M+", detail: "reports & fees" },
];

const features = [
  {
    icon: GraduationCap,
    title: "Unified academics",
    description:
      "Lesson plans, examinations, grading scales, and calendars synced across staff.",
    accent: "Academics",
  },
  {
    icon: MonitorSmartphone,
    title: "Connected mobile apps",
    description:
      "Teacher, student, and guardian portals in Nepali & English with real-time alerts.",
    accent: "Apps",
  },
  {
    icon: Users2,
    title: "Community engagement",
    description:
      "Fee reminders, feedback loops, and celebration stories in one moderated feed.",
    accent: "Community",
  },
  {
    icon: ShieldCheck,
    title: "Compliance ready",
    description:
      "Role-based access, secure hosting in-region, and audit logs for inspectors.",
    accent: "Security",
  },
];

const onboarding = [
  {
    title: "Discovery & blueprint",
    detail: "Map your manual workflows and define success metrics with our experts.",
    timeline: "Week 1",
  },
  {
    title: "Guided migration",
    detail: "Digitize records, train champions, and connect SMS/call gateways.",
    timeline: "Week 2–3",
  },
  {
    title: "Launch & coaching",
    detail: "Go live with confidence and weekly coaching until every teacher is fluent.",
    timeline: "Week 4",
  },
];

type FloatingShape = {
  type: "circle" | "triangle" | "square" | "dot";
  size: number;
  x: string;
  y: string;
  color: string;
  duration?: number;
  delay?: number;
  motion?: {
    x?: number[];
    y?: number[];
    rotate?: number[];
  };
};

const floatingShapes: FloatingShape[] = [
  {
    type: "circle",
    size: 28,
    x: "8%",
    y: "18%",
    color: "#7678ed",
    duration: 9,
    delay: 0,
    motion: {
      x: [0, 16, -12, 8],
      y: [0, -20, 12, -10],
      rotate: [0, 12, -8, 4],
    },
  },
  {
    type: "triangle",
    size: 34,
    x: "78%",
    y: "22%",
    color: "#d9d9d9",
    duration: 8,
    delay: 0.2,
    motion: {
      x: [0, -14, 9, -6],
      y: [0, 10, -18, 12],
      rotate: [0, -10, 6, -4],
    },
  },
  {
    type: "square",
    size: 26,
    x: "60%",
    y: "58%",
    color: "#ffffff",
    duration: 7.2,
    delay: 0.35,
    motion: {
      x: [0, 18, -8, 10],
      y: [0, -12, 7, -9],
      rotate: [0, 18, -14, 6],
    },
  },
  {
    type: "circle",
    size: 22,
    x: "34%",
    y: "72%",
    color: "#7678ed",
    duration: 8.5,
    delay: 0.5,
    motion: {
      x: [0, -20, 14, -10],
      y: [0, 14, -16, 8],
      rotate: [0, -15, 9, -6],
    },
  },
  {
    type: "triangle",
    size: 30,
    x: "18%",
    y: "60%",
    color: "#000000",
    duration: 7,
    delay: 0.65,
    motion: {
      x: [0, 12, -18, 9],
      y: [0, -16, 10, -8],
      rotate: [0, 16, -12, 4],
    },
  },
  {
    type: "square",
    size: 24,
    x: "50%",
    y: "28%",
    color: "#d9d9d9",
    duration: 8.8,
    delay: 0.8,
    motion: {
      x: [0, -12, 20, -8],
      y: [0, 18, -14, 9],
      rotate: [0, -20, 10, -6],
    },
  },
  {
    type: "dot",
    size: 12,
    x: "86%",
    y: "48%",
    color: "#ffffff",
    duration: 6.2,
    delay: 0.95,
    motion: {
      x: [0, 10, -6, 4],
      y: [0, -8, 6, -4],
    },
  },
  {
    type: "dot",
    size: 10,
    x: "42%",
    y: "40%",
    color: "#000000",
    duration: 6.5,
    delay: 1.15,
    motion: {
      x: [0, -10, 12, -6],
      y: [0, 6, -10, 4],
    },
  },
  {
    type: "triangle",
    size: 24,
    x: "68%",
    y: "40%",
    color: "#7678ed",
    duration: 7.8,
    delay: 1.3,
    motion: {
      x: [0, 16, -10, 12],
      y: [0, -14, 18, -12],
      rotate: [0, 20, -18, 10],
    },
  },
  {
    type: "dot",
    size: 14,
    x: "24%",
    y: "46%",
    color: "#d9d9d9",
    duration: 6.8,
    delay: 1.45,
    motion: {
      x: [0, 8, -12, 6],
      y: [0, -10, 14, -6],
    },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Pricing", href: "#register" },
];

const companyLinks = [
  { label: "Our Story", href: "#about" },
  { label: "Social Impact", href: "#impact" },
  { label: "Career", href: "#careers" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="page-shell relative min-h-screen overflow-hidden bg-[#373643] text-white">
      <div className="hero-gradient" aria-hidden />
      <header className="glass-nav fixed top-3 left-3 right-3 z-30 mx-auto w-auto max-w-6xl px-3 py-1.5 sm:px-6 md:inset-x-0 md:top-6 md:px-8 md:py-1.5">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              className="rounded-xl"
              src="/logo.png"
              alt="Digital Vidhyalaya logo"
              width={48}
              height={48}
              priority
            />
            <div>
              <p className="text-sm font-semibold text-white sm:text-base">Vidhyalaya</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="nav-link nav-dropdown-trigger">
                Company
                <svg 
                  className={`dropdown-arrow ${isCompanyOpen ? 'open' : ''}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none"
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              {isCompanyOpen && (
                <div className="nav-dropdown-menu">
                  {companyLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="nav-dropdown-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <button
                type="button"
                className="nav-toggle"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Toggle menu</span>
                <span aria-hidden className={`hamburger ${isMenuOpen ? "is-open" : ""}`} />
              </button>
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              <a className="btn-ghost" href="#register">
                Talk to our team
              </a>
              <a
                className="btn-accent"
                href="https://app.vidhyalaya.digital"
                target="_blank"
                rel="noreferrer"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu w-full lg:hidden ${isMenuOpen ? "open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.label}`}
                href={link.href}
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-dropdown">
              <button
                className="nav-link block w-full text-left"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <span className="flex items-center justify-between">
                  Company
                  <svg 
                    className={`dropdown-arrow ${isCompanyOpen ? 'open' : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {isCompanyOpen && (
                <div className="mobile-dropdown-menu">
                  {companyLinks.map((link) => (
                    <a
                      key={`mobile-${link.label}`}
                      href={link.href}
                      className="nav-dropdown-link block"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsCompanyOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a className="btn-ghost block text-center" href="#register" onClick={() => setIsMenuOpen(false)}>
              Talk to our team
            </a>
            <a
              className="btn-accent block text-center"
              href="https://app.vidhyalaya.digital"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-24 lg:px-12">
        <main className="mt-4 space-y-24 md:mt-6">
          <section className="hero-section relative grid overflow-hidden gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="shape-layer" aria-hidden>
              {floatingShapes.map((shape, index) => {
                const baseStyle: MotionStyle & { "--shape-size"?: string } = {
                  left: shape.x,
                  top: shape.y,
                  color: shape.color,
                };

                if (shape.type !== "triangle") {
                  baseStyle["--shape-size"] = `${shape.size}px`;
                } else {
                  baseStyle.width = shape.size;
                  baseStyle.height = shape.size;
                }

                const animateConfig = {
                  x: shape.motion?.x ?? [0, 14, -10, 6],
                  y: shape.motion?.y ?? [0, -12, 8, -6],
                  rotate: shape.motion?.rotate,
                  opacity: [0.2, 0.85, 0.45],
                };

                if (!animateConfig.rotate) {
                  delete animateConfig.rotate;
                }

                const transitionConfig = {
                  duration: shape.duration ?? 8 + index * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror" as const,
                  ease: "easeInOut" as const,
                  delay: shape.delay ?? 0,
                };

                if (shape.type === "triangle") {
                  return (
                    <motion.svg
                      key={`${shape.type}-${index}`}
                      className="floating-triangle"
                      style={baseStyle}
                      viewBox="0 0 100 100"
                      initial={{ opacity: 0 }}
                      animate={animateConfig}
                      transition={transitionConfig}
                    >
                      <polygon points="50 5, 5 95, 95 95" />
                    </motion.svg>
                  );
                }

                return (
                  <motion.span
                    key={`${shape.type}-${index}`}
                    className={`floating-shape floating-shape--${shape.type}`}
                    style={baseStyle}
                    initial={{ opacity: 0 }}
                    animate={animateConfig}
                    transition={transitionConfig}
                  />
                );
              })}
            </div>
            <div className="hero-content relative z-[1] space-y-10">
              <motion.p
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
              >
                Purpose-built for Nepal
              </motion.p>
              <motion.h1
                className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-4xl"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                A complete system that keeps your school organized,
                accountable, and connected.
              </motion.h1>
              <motion.p
                className="text-lg text-white sm:text-xl"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We pair beautiful software with on-ground experts so Nepali schools can
                modernize admissions, academics, finance, and communication in weeks—not
                years. Affordable, multilingual, and built for the realities of your
                classrooms.
              </motion.p>
              <motion.ul
                className="grid gap-4 text-base text-white sm:grid-cols-2"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <li className="feature-pill">Digitized admission & fee journeys</li>
                <li className="feature-pill">Smart lesson plans & attendance</li>
                <li className="feature-pill">Guardian & alumni engagement app</li>
                <li className="feature-pill">Offline-friendly analytics & SMS alerts</li>
              </motion.ul>
              <motion.div
                className="flex flex-wrap gap-4"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a className="btn-primary" href="#register">
                  Register your organization
                </a>
                <a className="btn-secondary" href="#features">
                  Watch platform walkthrough
                </a>
              </motion.div>
            </div>

            <div className="hero-phones phone-mockup-container relative z-[1]">
              <div className="phone-mockup phone-back">
                <Image
                  src="/phoneui1.png"
                  alt="Digital Vidhyalaya App Interface"
                  width={400}
                  height={810}
                  className="phone-image"
                  priority
                />
              </div>
              <div className="phone-mockup phone-front">
                <Image
                  src="/phoneui.png"
                  alt="Digital Vidhyalaya App Interface"
                  width={400}
                  height={810}
                  className="phone-image"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm font-medium text-white">{stat.label}</p>
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    {stat.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="features" className="space-y-10">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <p className="eyebrow">Platform modules</p>
              <h2 className="section-title">
                All the modules you need, without the messy stitching
              </h2>
              <p className="section-copy">
                Digital Vidhyalaya centralizes student information, lesson planning, HR,
                finance, transport, and governance so your team can focus on learning
                outcomes instead of juggling spreadsheets.
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="feature-card"
                  whileHover={{ y: -6 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                >
                  <div className="icon-shell">
                    <feature.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                      {feature.accent}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-base text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="journey-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="eyebrow">Operational clarity</p>
                  <h2 className="section-title">Realtime visibility for every leader</h2>
                </div>
                <LineChart className="text-[#b8b9ff]" size={38} />
              </div>
              <p className="section-copy">
                Dashboards stitched for principals, finance leads, and coordinators.
                Spot low attendance before it becomes a dropout, view teacher workload,
                and get automated ministry-ready reports.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="stat-card">
                  <p className="text-4xl font-semibold text-white">24</p>
                  <p className="text-white/60">live district dashboards</p>
                </div>
                <div className="stat-card">
                  <p className="text-4xl font-semibold text-white">7x</p>
                  <p className="text-white/60">faster compliance reports</p>
                </div>
              </div>
            </div>
            <div className="journey-card">
              <p className="eyebrow">How onboarding works</p>
              <h2 className="section-title">A guided journey, never DIY</h2>
              <div className="mt-6 space-y-6">
                {onboarding.map((step) => (
                  <div key={step.title} className="onboarding-step">
                    <div>
                      <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                        {step.timeline}
                      </p>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-white/70">{step.detail}</p>
                    </div>
                    <BookOpenCheck className="text-[#9da0ff]" size={36} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="register" className="register-card">
            <div>
              <p className="eyebrow">Ready to modernize?</p>
              <h2 className="section-title">Register your organization in three steps</h2>
              <ul className="mt-4 space-y-2 text-white/75">
                <li>➊ Share your current systems, budgets, and priorities.</li>
                <li>➋ Receive a tailored rollout & pricing model within 48 hours.</li>
                <li>➌ Start onboarding with a dedicated Digital Vidhyalaya coach.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <a className="btn-primary w-full text-center" href="mailto:hello@vidhyalaya.digital?subject=Register%20my%20school">
                Email our onboarding desk
              </a>
              <a
                className="btn-secondary w-full text-center"
                href="https://calendly.com/vidhyalaya-digital/intro"
                target="_blank"
                rel="noreferrer"
              >
                Book a 20-min discovery call
              </a>
              <p className="text-sm text-white/60">
                Prefer WhatsApp or Viber? Message +977 98-VIDHYALAYA and we will set up a
                callback in Nepali or English.
              </p>
            </div>
          </section>
        </main>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Digital Vidhyalaya. Built in Kathmandu with care.</p>
          <div className="flex gap-4">
            <a className="underline-offset-4 hover:underline" href="#features">
              Platform overview
            </a>
            <a className="underline-offset-4 hover:underline" href="#register">
              Register organization
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
