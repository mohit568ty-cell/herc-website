import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ClipboardCheck,
  Leaf,
  Mountain,
  Snowflake,
  Map as MapIcon,
  Trees,
  Droplets,
  FileText,
  Sparkles,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HERC" },
      {
        name: "description",
        content:
          "Environmental consultancy services: EIA, biodiversity surveys, Himalayan ecosystem research, climate and glacier studies, GIS and remote sensing, watershed studies and technical reporting.",
      },
      { property: "og:title", content: "Services — HERC" },
      {
        property: "og:description",
        content:
          "Environmental consultancy services covering EIA, biodiversity, ecosystem research, climate and glacier studies, GIS, watershed and reporting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

type Service = {
  icon: typeof Leaf;
  title: string;
  description: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Environmental Impact Assessment (EIA)",
    description:
      "Structured EIA studies supporting project clearances and statutory documentation. Field investigations, baseline environmental data collection, impact evaluation and mitigation planning delivered through documented protocols.",
    deliverables: [
      "Baseline environmental data",
      "Impact identification and evaluation",
      "Mitigation and monitoring plans",
      "Statutory EIA documentation",
    ],
  },
  {
    icon: Leaf,
    title: "Biodiversity & Ecological Surveys",
    description:
      "Systematic ecological surveys covering flora and fauna inventories, habitat characterisation and community-level assessments. Suitable for project baselines, conservation planning and long-term monitoring programmes.",
    deliverables: [
      "Species inventories and checklists",
      "Habitat assessment reports",
      "Community and diversity indices",
      "Monitoring protocol design",
    ],
  },
  {
    icon: Mountain,
    title: "Himalayan Ecosystem Research",
    description:
      "Field-based research across alpine, sub-alpine and mid-hill ecosystems of the Indian Himalayan region. Focused on ecosystem structure, functioning and change through repeatable field measurements.",
    deliverables: [
      "Ecosystem baseline assessments",
      "Long-term monitoring plots",
      "Landscape-level field studies",
      "Technical research reports",
    ],
  },
  {
    icon: Snowflake,
    title: "Climate Change & Glacier Studies",
    description:
      "Support for climate variability and cryosphere research, including field data collection, secondary data compilation and documentation of observed change in high-altitude environments.",
    deliverables: [
      "Climate data compilation",
      "Cryosphere field observations",
      "Change documentation reports",
      "Vulnerability inputs for planning",
    ],
  },
  {
    icon: MapIcon,
    title: "GIS & Remote Sensing Support",
    description:
      "Spatial data workflows for environmental studies — thematic mapping, land-use and land-cover analysis, and spatial documentation of survey outputs using established GIS and remote-sensing tools.",
    deliverables: [
      "Thematic and base maps",
      "Land-use / land-cover analysis",
      "Field-integrated spatial datasets",
      "Cartographic outputs for reports",
    ],
  },
  {
    icon: Trees,
    title: "Natural Resource Management",
    description:
      "Documentation and assessment support for forest, land and biological resources. Includes resource inventories, condition assessments and inputs for management and planning processes.",
    deliverables: [
      "Resource inventories",
      "Condition and use assessments",
      "Management planning inputs",
      "Stakeholder documentation",
    ],
  },
  {
    icon: Droplets,
    title: "Watershed & Water Resource Studies",
    description:
      "Catchment-scale studies covering physical characterisation, water availability documentation and land–water linkages. Field data collection is combined with secondary datasets for integrated reporting.",
    deliverables: [
      "Watershed characterisation",
      "Water resource inventories",
      "Land–water linkage analysis",
      "Integrated technical reports",
    ],
  },
  {
    icon: FileText,
    title: "Environmental Documentation & Technical Reporting",
    description:
      "Preparation of structured technical reports, environmental documentation and institutional deliverables. Written to be clear, traceable and consistent with client and agency requirements.",
    deliverables: [
      "Project and progress reports",
      "Technical and thematic reports",
      "Institutional deliverables",
      "Editorial and review support",
    ],
  },
];

function Page() {
  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <Hero />
        <ServicesGrid />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" />
          Consultancy
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: easing }}
          className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
        >
          Environmental services grounded in field experience.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easing }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A focused set of consultancy services for government departments,
          research institutions, industries and non-profits working in the
          Indian Himalayan region.
        </motion.p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we offer"
          title="Eight areas of technical support."
          description="Each service is delivered through documented protocols and structured deliverables."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: easing }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/40 hover:shadow-lift"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-forest transition-colors group-hover:bg-forest group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="mt-5 hairline" />
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-glow">
                Key deliverables
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-glow" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto rounded-full px-3 py-1.5 text-sm font-medium text-forest hover:bg-secondary hover:text-forest-deep"
                >
                  <Link to="/contact">
                    Request Consultation
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-24 pt-4 sm:pb-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easing }}
          className="rounded-[2rem] bg-gradient-forest px-8 py-14 text-primary-foreground shadow-lift sm:px-14 sm:py-20"
        >
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-glow">
            Discuss a scope of work
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Let's discuss your environmental project.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Share your requirements and we will respond with a considered
            proposal, timeline and delivery approach.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary-foreground text-forest-deep hover:bg-primary-foreground/90"
            >
              <Link to="/contact">
                Request a proposal
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/collaborate">Explore collaboration</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
