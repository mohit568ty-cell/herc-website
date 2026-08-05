import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Compass,
  Sprout,
  Landmark,
  Mountain,
  Handshake,
  Telescope,
  Leaf,
  Trees,
  CloudRain,
  PawPrint,
  Map as MapIcon,
  ClipboardCheck,
  FlaskConical,
  ShieldCheck,
  BookOpen,
  Recycle,
  Quote,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import heroImg from "@/assets/hero-himalaya.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HERC — Himalayan Environmental Research Centre" },
      {
        name: "description",
        content:
          "Founded by Mr. Jagdish Pandey, HERC is an independent research institute advancing environmental science, biodiversity conservation and sustainable development across the Indian Himalaya.",
      },
      { property: "og:title", content: "About HERC" },
      {
        property: "og:description",
        content:
          "The people, principles and 29+ years of Himalayan field science behind HERC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const easing = [0.22, 1, 0.36, 1] as const;

const milestones = [
  {
    icon: Compass,
    year: "The beginning",
    title: "A field-first research journey",
    body:
      "HERC begins as a small circle of ecologists and field researchers walking the ridges of Kumaon — quietly building baselines that governments and universities would later cite.",
  },
  {
    icon: Landmark,
    year: "Government partnerships",
    title: "Nationally funded programmes",
    body:
      "Selected for multi-year assignments with central ministries and state departments — forest inventories, springshed studies and environmental impact assessments across the IHR.",
  },
  {
    icon: Sprout,
    year: "Biodiversity",
    title: "Himalayan ecosystems, in depth",
    body:
      "Long-term plots for tree phenology, medicinal plant diversity and pollinator networks — a decade of data that now informs restoration policy in three states.",
  },
  {
    icon: Handshake,
    year: "Consultancy",
    title: "Scientific collaborations",
    body:
      "Formal partnerships with ISRO, DBT, NMHS and leading universities. HERC becomes a trusted bridge between rigorous field science and the agencies that act on it.",
  },
  {
    icon: Telescope,
    year: "The road ahead",
    title: "A vision for the next decade",
    body:
      "Investing in open data, community-led monitoring and cross-border Himalayan science — so the next generation inherits an institution, not just a set of reports.",
  },
];

const focusAreas = [
  { icon: Leaf, title: "Biodiversity", body: "Species inventories, medicinal plants and long-term ecological monitoring." },
  { icon: Trees, title: "Forest Ecology", body: "Structure, regeneration and community-managed forest landscapes." },
  { icon: CloudRain, title: "Climate Change", body: "Cryosphere, precipitation shifts and adaptation for mountain communities." },
  { icon: PawPrint, title: "Wildlife Conservation", body: "Human–wildlife interfaces, habitat connectivity and species recovery." },
  { icon: MapIcon, title: "GIS & Remote Sensing", body: "Spatial analytics, land-use change and ground-truthed vegetation mapping." },
  { icon: ClipboardCheck, title: "Environmental Consultancy", body: "EIA, baseline surveys, monitoring and independent advisory services." },
];

const whyHerc = [
  { icon: FlaskConical, title: "Scientific Excellence", body: "Peer-reviewed methods, transparent data and reproducible field protocols." },
  { icon: Mountain, title: "Field Experience", body: "Nearly three decades of continuous work across the Indian Himalayan region." },
  { icon: ShieldCheck, title: "Research Integrity", body: "Independent, evidence-led and free of shortcuts — even under project pressure." },
  { icon: Recycle, title: "Sustainable Solutions", body: "Recommendations grounded in ecology, community realities and long-term stewardship." },
];

function AboutPage() {
  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <AboutHero />
        <OurStory />
        <FounderProfile />
        <MissionVisionValues />
        <ResearchFocus />
        <WhyHerc />
        <AboutCta />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: easing }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-deep/92 via-forest-deep/85 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur"
        >
          <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" />
          About HERC
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          A patient institute for a fragile mountain system.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.15 }}
          className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:text-xl"
        >
          Himalayan Environmental Research &amp; Consultancy (HERC) is
          dedicated to advancing environmental research, biodiversity
          conservation and sustainable development through scientific
          excellence, field experience and innovative solutions.
        </motion.p>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our story"
          title="A quiet institution, built one field season at a time."
          description="HERC didn't begin with a launch — it grew from long walks, patient notebooks and a refusal to shortcut the science. These are the chapters that shaped us."
        />

        <div className="relative mt-16">
          <div aria-hidden="true" className="pointer-events-none absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block" />
          <ul className="space-y-6 md:space-y-8">
            {milestones.map((m, i) => (
              <motion.li
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easing, delay: i * 0.05 }}
                className="relative md:pl-20"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-4 hidden h-12 w-12 place-items-center rounded-2xl border border-border bg-card text-forest shadow-sm md:grid"
                >
                  <m.icon className="h-5 w-5" />
                </span>
                <div className="rounded-3xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lift sm:p-8">
                  <div className="flex items-center gap-3 md:hidden">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-forest">
                      <m.icon className="h-4 w-4" />
                    </span>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-glow">
                      {m.year}
                    </p>
                  </div>
                  <p className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-glow md:block">
                    {m.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-foreground sm:text-3xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FounderProfile() {
  const stats = [
    { k: "29+", v: "Years of field experience" },
    { k: "100+", v: "Ecological studies led" },
    { k: "20+", v: "Government & academic partners" },
  ];
  const expertise = [
    "Forest ecology & regeneration",
    "Springshed & mountain hydrology",
    "Biodiversity assessments",
    "Environmental impact assessment",
    "Community-led conservation",
    "Remote sensing & field mapping",
  ];

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(700px 320px at 10% 0%, oklch(0.62 0.14 160 / 0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: easing }}
            className="relative overflow-hidden rounded-[2rem] shadow-lift lg:sticky lg:top-28"
          >
            <img
              src={founderImg}
              alt="Portrait of Mr. Jagdish Pandey, Founder of HERC"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Founder &amp; Environmental Research Professional
              </p>
              <p className="mt-1 font-display text-2xl text-white sm:text-3xl">
                Mr. Jagdish Pandey
              </p>
            </div>
            <div className="absolute right-5 top-5 sm:right-6 sm:top-6">
              <BrandMark size="sm" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: easing }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-glow">
              Leadership profile
            </span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
              A scientist first — an institution builder by consequence.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mr. Jagdish Pandey has spent nearly three decades in the Indian
              Himalaya — walking transects, sitting with village councils, and
              turning careful field notes into decisions that agencies and
              universities trust. HERC is the quiet institution that grew from
              that practice.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card px-5 py-4">
                  <dt className="font-display text-3xl font-medium text-forest-deep">{s.k}</dt>
                  <dd className="mt-1 text-xs leading-tight text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Areas of expertise
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {expertise.map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-2 h-1 w-3 rounded-full bg-emerald-glow" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Professional philosophy
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                    Science that respects the ground it walks on — slow enough
                    to be right, honest enough to be useful, and generous
                    enough to belong to the communities it studies.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Vision for HERC
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                    A permanent, independent Himalayan research institute —
                    with open data, long-term monitoring stations and a new
                    generation of mountain scientists trained on the field,
                    not the slideshow.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-10 rounded-3xl border border-border bg-card p-7">
              <Quote className="absolute -top-3 left-6 h-7 w-7 rounded-full bg-forest p-1.5 text-primary-foreground" />
              <p className="text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
                "The Himalaya deserves an institution that will listen to it
                for a lifetime — not for a project cycle."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  const items = [
    {
      icon: Compass,
      eyebrow: "Mission",
      title: "Rigorous science, in service of the mountains.",
      body:
        "Conduct independent, field-based environmental research and advisory work that helps governments, communities and institutions make better decisions for Himalayan ecosystems.",
    },
    {
      icon: Telescope,
      eyebrow: "Vision",
      title: "A Himalayan institute that outlives its founders.",
      body:
        "To be the reference research organisation for the Indian Himalayan Region — trusted for the depth of its data, the honesty of its findings and the durability of its programmes.",
    },
    {
      icon: BookOpen,
      eyebrow: "Core values",
      title: "Integrity, patience, generosity.",
      body:
        "We publish what we find. We stay with a landscape long enough to understand it. We share methods, data and mentorship openly with the wider research community.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What guides us"
          title="Mission, vision and the values in between."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: easing, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-forest transition-colors group-hover:bg-forest group-hover:text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-glow">
                {it.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-foreground">
                {it.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{it.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchFocus() {
  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research focus"
          title="Six disciplines, one mountain system."
          description="Each area is led by field practitioners and connected to long-term monitoring — not one-off assignments."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easing, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lift"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-glow/0 blur-2xl transition-colors duration-500 group-hover:bg-emerald-glow/15"
              />
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-secondary text-forest transition-transform duration-300 group-hover:scale-105">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-medium text-foreground">
                {f.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyHerc() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why HERC"
          title="Four commitments we do not compromise on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {whyHerc.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: easing, delay: i * 0.06 }}
              className="group flex gap-5 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-forest text-primary-foreground shadow-sm">
                <w.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-foreground sm:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easing }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-forest px-6 py-16 text-primary-foreground shadow-lift sm:px-14 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 10% 20%, oklch(0.72 0.15 160 / 0.4), transparent 60%), radial-gradient(500px 260px at 90% 100%, oklch(0.42 0.045 245 / 0.45), transparent 60%)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-glow">
                Need environmental research support?
              </span>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
                Let's work together to create sustainable solutions.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Whether it's a baseline survey, a multi-year monitoring
                programme or an independent advisory role — HERC partners with
                organisations that take the mountains seriously.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full bg-emerald-glow px-8 text-base font-medium text-forest-deep shadow-lift hover:bg-emerald-glow/90"
              >
                <Link to="/contact">
                  Contact HERC
                  <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}