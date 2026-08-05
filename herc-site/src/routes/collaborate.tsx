import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Microscope,
  HeartHandshake,
  Users,
  Factory,
  Compass,
  Leaf,
  MapPinned,
  Droplets,
  ClipboardList,
  FileText,
  LineChart,
  MessageCircle,
  Search,
  Mountain,
  FileCheck,
  Landmark,
  CalendarClock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import heroHimalaya from "@/assets/hero-himalaya.jpg";

export const Route = createFileRoute("/collaborate")({
  head: () => ({
    meta: [
      { title: "Collaborate With Us — HERC" },
      {
        name: "description",
        content:
          "Partner with the Himalayan Environmental Research Centre for environmental research, field investigations, scientific documentation and sustainable development initiatives.",
      },
      { property: "og:title", content: "Collaborate With Us — HERC" },
      {
        property: "og:description",
        content:
          "Partner with the Himalayan Environmental Research Centre for environmental research, field investigations, scientific documentation and sustainable development initiatives.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collaborate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/collaborate" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Collaborate With Us — HERC",
          description:
            "Partner with the Himalayan Environmental Research Centre for environmental research, field investigations, scientific documentation and sustainable development initiatives.",
          url: "/collaborate",
          isPartOf: {
            "@type": "WebSite",
            name: "HERC — Himalayan Environmental Research Centre",
            url: "/",
          },
          about: {
            "@type": "Organization",
            name: "Himalayan Environmental Research Centre",
            description:
              "Himalayan environmental research, conservation science and institutional project support.",
          },
        }),
      },
    ],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

const partners = [
  {
    icon: Building2,
    title: "Government Departments",
    description:
      "Field investigations, monitoring programmes and technical documentation for state and central agencies.",
  },
  {
    icon: GraduationCap,
    title: "Universities & Academic Institutions",
    description:
      "Research partnerships, data collection and field support for doctoral and institutional studies.",
  },
  {
    icon: Microscope,
    title: "Research Organizations",
    description:
      "Collaborative science across biodiversity, climate, hydrology and cryosphere disciplines.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs",
    description:
      "Conservation planning, community engagement and evidence-based programme design.",
  },
  {
    icon: Users,
    title: "CSR Foundations",
    description:
      "Sustainable development and environmental impact projects aligned with regulatory goals.",
  },
  {
    icon: Factory,
    title: "Industries",
    description:
      "EIA support, baseline surveys and environmental monitoring for responsible operations.",
  },
  {
    icon: Compass,
    title: "Environmental Consultants",
    description:
      "Specialist field support, scientific documentation and remote-area logistics.",
  },
];

const areas = [
  {
    icon: Leaf,
    title: "Environmental Research Support",
    note: "Design and execution of field research programmes",
  },
  {
    icon: MapPinned,
    title: "Field Surveys & Documentation",
    note: "Transects, plots and rigorous field records",
  },
  {
    icon: Microscope,
    title: "Biodiversity Studies",
    note: "Species inventories and habitat assessments",
  },
  {
    icon: Droplets,
    title: "Watershed & Himalayan Ecosystem Studies",
    note: "Catchment and alpine ecosystem research",
  },
  {
    icon: ClipboardList,
    title: "Project Coordination",
    note: "Multi-partner and multi-site management",
  },
  {
    icon: FileText,
    title: "Scientific Documentation",
    note: "Technical reports and institutional deliverables",
  },
  {
    icon: LineChart,
    title: "Environmental Monitoring",
    note: "Long-term data collection and QA protocols",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    note: "Field skills and research methodology training",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Discussion",
    note: "We understand your goals, geography and timeline.",
  },
  {
    icon: Search,
    title: "Requirement Analysis",
    note: "We define scope, methods and deliverables together.",
  },
  {
    icon: Mountain,
    title: "Research & Field Support",
    note: "We execute fieldwork, documentation and monitoring.",
  },
  {
    icon: FileCheck,
    title: "Project Delivery",
    note: "We hand over reports, data and follow-through support.",
  },
];

const reasons = [
  {
    icon: CalendarClock,
    title: "Nearly Three Decades of Experience",
    note: "Long-standing practice across Himalayan landscapes.",
  },
  {
    icon: Landmark,
    title: "Government Project Experience",
    note: "Trusted by central and state agencies for field delivery.",
  },
  {
    icon: FileText,
    title: "Scientific Documentation Expertise",
    note: "Clear, traceable and institutional-grade reports.",
  },
  {
    icon: Mountain,
    title: "Himalayan Field Experience",
    note: "Remote, high-altitude and forest terrain capability.",
  },
  {
    icon: Users,
    title: "Trusted Professional Network",
    note: "Established relationships across institutions and agencies.",
  },
  {
    icon: Microscope,
    title: "Research-Oriented Approach",
    note: "Protocol-driven, evidence-first and transparent.",
  },
];

function Page() {
  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Partners />
        <Areas />
        <Process />
        <WhyCollaborate />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroHimalaya}
          alt=""
          className="h-full w-full object-cover opacity-20 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" />
          Partnerships
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: easing }}
          className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Collaborate With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easing }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Partner with us for environmental research, field investigations,
          scientific documentation, and sustainable development initiatives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easing }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-forest text-primary-foreground shadow-elegant hover:bg-forest-deep"
          >
            <Link to="/contact">
              Request Collaboration
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border bg-background/80 hover:bg-secondary"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Who We Work With"
          title="Partners across science, policy and practice."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: easing }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/40 hover:shadow-lift"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-forest transition-colors group-hover:bg-forest group-hover:text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Areas of Collaboration"
          title="Built on decades of field expertise."
          description="We contribute where we have deep, proven experience — no invented capabilities."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.03, ease: easing }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-emerald-glow/40"
            >
              <a.icon className="h-5 w-5 text-emerald-glow" />
              <h3 className="mt-4 font-display text-base font-medium text-foreground">
                {a.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Collaboration Process"
          title="A simple path from first conversation to delivery."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: easing }}
              className="relative"
            >
              <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-primary-foreground">
                    <step.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-glow">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.note}</p>
              </div>

              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 px-3"
                >
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCollaborate() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why Collaborate With Us"
          title="Experience that translates into reliable partnerships."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: easing }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-forest">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easing }}
          className="rounded-[2rem] bg-gradient-forest px-8 py-14 text-primary-foreground shadow-lift sm:px-14 sm:py-20"
        >
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-glow">
            Start a conversation
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Let's Work Together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Whether you're planning an environmental research project,
            conservation initiative, or scientific documentation effort, we'd be
            happy to discuss how we can contribute.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-emerald-glow px-7 text-base font-medium text-forest-deep shadow-lift hover:bg-emerald-glow/90"
            >
              <Link to="/contact">
                Request Collaboration
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
