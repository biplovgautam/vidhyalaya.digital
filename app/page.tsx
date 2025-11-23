"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="page-shell relative min-h-screen overflow-hidden bg-[#373643] text-white">
      <div className="hero-gradient" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10 md:px-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <Image
              className="rounded-2xl border border-white/15"
              src="/digitalvidhyalaya.png"
              alt="Digital Vidhyalaya logo"
              width={72}
              height={72}
              priority
            />
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                Digital Vidhyalaya
              </p>
              <p className="text-lg font-semibold text-white">
                Software for future-ready schools
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
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
        </nav>

        <main className="mt-16 space-y-24">
          <section className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-10">
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
                className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
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
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm font-medium text-white">{stat.label}</p>
                    <p className="text-xs uppercase tracking-wider text-white/70">
                      {stat.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="hero-blank-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              aria-hidden
            />
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
