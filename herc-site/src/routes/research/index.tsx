import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { motion } from "motion/react";
import biodiversityImg from "@/assets/gallery/ecology-quadrat-survey-plot-02.jpeg";
import {
  FileText,
  Compass,
  BookOpen,
  Handshake,
  TreePine,
  ScrollText,
  GraduationCap,
  Truck,
  ArrowUpRight,
  ShieldCheck,
  Microscope,
  MapPinned,
  BadgeCheck,
  Library,
  AlertTriangle,
} from "lucide-react";
import glacierImg from "@/assets/project-glacier.jpg";
import climateImg from "@/assets/hero-himalaya.jpg";
import ecologyImg from "@/assets/project-forest.jpg";
import { Button } from "@/components/ui/button";
import heroHimalaya from "@/assets/hero-himalaya.jpg";
import { BrandMark } from "@/components/site/brand-mark";
import { useResearchDomains } from "@/hooks/useResearchDomains";

function ResearchRoute() {
  return <Outlet />;
}

export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      { title: "Himalayan Research Domains & Expertise — HERC" },
      {
        name: "description",
        content:
          "Explore HERC's research domains and field expertise: Himalayan biodiversity, cryosphere, watersheds, climate change, and institutional project support.",
      },
      {
        property: "og:title",
        content: "Himalayan Research Domains & Expertise — HERC",
      },
      {
        property: "og:description",
        content:
          "Explore HERC's research domains and field expertise: Himalayan biodiversity, cryosphere, watersheds, climate change, and institutional project support.",
      },
      {
        property: "og:url",
        content: "/research",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Himalayan Research Domains & Expertise — HERC",
      },
      {
        name: "twitter:description",
        content:
          "Explore HERC's research domains and field expertise: Himalayan biodiversity, cryosphere, watersheds, climate change, and institutional project support.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/research",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Himalayan Research Domains & Expertise — HERC",
          description:
            "Explore HERC's research domains and field expertise: Himalayan biodiversity, cryosphere, watersheds, climate change, and institutional project support.",
          url: "/research",
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

  component: ResearchIndex,
});

/* ------------------------------------------------------------------ */
/* Fallback images used when a domain from the API has no imageUrl.   */
/* Cycled by index so cards still look visually distinct.             */

const fallbackImages = [
  biodiversityImg,
  ecologyImg,
  climateImg,
  glacierImg,
  biodiversityImg,
  biodiversityImg,
];

function getDomainImage(imageUrl: string | null | undefined, index: number) {
  if (imageUrl) return imageUrl;
  return fallbackImages[index % fallbackImages.length];
}

/* ------------------------------------------------------------------ */

type Expertise = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  note: string;
};

const expertise: Expertise[] = [
  { icon: Compass, title: "Field Investigation", note: "High-altitude glacier, biodiversity and environmental field surveys" },
  { icon: BookOpen, title: "Research Documentation", note: "Technical reports, publications and scientific documentation" },
  { icon: Handshake, title: "Project Coordination", note: "Government, institutional and multi-disciplinary projects" },
  { icon: TreePine, title: "Environmental Surveys", note: "Forest ecology, biodiversity and ecosystem assessments" },
  { icon: ScrollText, title: "Scientific Reporting", note: "Project reports, conference proceedings and documentation" },
  { icon: GraduationCap, title: "Training & Capacity Building", note: "Supporting students, researchers and field teams" },
  { icon: FileText, title: "Technical Documentation", note: "Project deliverables, manuals and institutional records" },
  { icon: Truck, title: "Field Logistics", note: "Expeditions, high-altitude camps and equipment management" },
];

const methodology = [
  { title: "Planning", note: "Scoping, protocols, permissions" },
  { title: "Field Survey", note: "Transects, plots, sampling" },
  { title: "Scientific Documentation", note: "Field notes and evidence" },
  { title: "Data Compilation", note: "Cleaning, structuring, QA" },
  { title: "Technical Reporting", note: "Institutional-grade reports" },
  { title: "Project Support", note: "Follow-through and hand-off" },
];

type Featured = {
  name: string;
  duration: string;
  role: string;
  area: string;
  image?: string;
  summary: string;
};

const featured: Featured[] = [
  {
    name: "ISRO-GBP Global Climate Change Studies in High Altitude Himalaya",
    duration: "Feb 2004 – Apr 2007",
    role: "Project Support & Research Documentation",
    area: "Climate Change & High Altitude Ecosystems",
    image: climateImg,
    summary:
      "Supported one of the major Himalayan climate research initiatives through field data compilation, project documentation, record management and coordination support for high-altitude environmental studies.",
  },
  {
    name: "Geodynamics and Hydrochemical Study of Gangotri Glacier",
    duration: "Nov 2013 – Feb 2016",
    role: "Field Data & Project Support",
    area: "Glaciology & Himalayan Water Systems",
    image: glacierImg,
    summary:
      "Contributed to glacier research activities through field data collection, compilation, documentation and administrative support for studies focused on Himalayan glacier dynamics and hydrochemical characteristics.",
  },
  {
    name: "Glacier Studies of Kumaon Himalaya Project",
    duration: "May 2007 – Jan 2010",
    role: "Research Project Support",
    area: "Glacier Ecology & Mountain Environment",
    image: ecologyImg,
    summary:
      "Supported Himalayan glacier investigations through field survey assistance, research data compilation and maintenance of scientific project records for glacier monitoring activities.",
  },
];

const whyWorkWithUs = [
  { icon: BadgeCheck, title: "Decades of Experience", note: "Long-standing Himalayan field practice." },
  { icon: Library, title: "Institutional Knowledge", note: "Continuity across programmes and partners." },
  { icon: Microscope, title: "Scientific Approach", note: "Protocol-driven, evidence-first fieldwork." },
  { icon: MapPinned, title: "Field Expertise", note: "Remote, high-altitude and forested terrain." },
  { icon: FileText, title: "Reliable Documentation", note: "Traceable records and clean deliverables." },
  { icon: ShieldCheck, title: "Research Integrity", note: "Transparent methods and honest reporting." },
];

/* ------------------------------------------------------------------ */

function ResearchIndex() {
  return (
    <>
      <Hero />
      <Domains />
      <ProfessionalExpertise />
      <Methodology />
      <FeaturedExperience />
      <WhyWorkWithUs />
      <ConsultationCTA />
    </>
  );
}

/* --- Sections ----------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div className="absolute inset-0 -z-10">
        <img src={heroHimalaya} alt="" className="h-full w-full object-cover opacity-[0.22]" />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/85 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" />
          Research Domains &amp; Expertise
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          A lifetime of fieldwork across the Himalayan environment.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Decades of on-ground contribution to Himalayan ecosystem research —
          biodiversity, cryosphere, watersheds and climate — in service of
          universities, research institutes and government departments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild className="rounded-full bg-forest text-primary-foreground shadow-elegant hover:bg-forest-deep">
            <Link to="/contact">
              Request consultation
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full border border-border">
            <a href="#domains">Explore domains</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-glow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Domains() {
  const { data: domains, isLoading, isError, error, refetch } = useResearchDomains();

  return (
    <section id="domains" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Core Research Domains"
          title="Where decades of fieldwork have concentrated."
          description="Each domain reflects sustained, hands-on contribution across the Indian Himalayan region."
        />

        {isLoading && <DomainsSkeleton />}

        {isError && (
          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-16 text-center">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <p className="text-sm text-muted-foreground">
              {error?.message || "Couldn't load research domains right now."}
            </p>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => refetch()}
            >
              Try again
            </Button>
          </div>
        )}

        {!isLoading && !isError && domains && domains.length === 0 && (
          <div className="mt-16 rounded-3xl border border-border bg-card px-6 py-16 text-center text-sm text-muted-foreground">
            No research domains available yet.
          </div>
        )}

        {!isLoading && !isError && domains && domains.length > 0 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((d, i) => (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:border-emerald-glow/40 hover:shadow-lift"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-forest overflow-hidden">
                    <img
                      src={getDomainImage(d.imageUrl, i)}
                      alt=""
                      className="h-5 w-5 object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <Link
                    to="/research/$slug"
                    params={{ slug: d.slug }}
                    className="inline-flex items-center gap-1 text-sm font-medium text-forest hover:text-emerald-glow"
                  >
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DomainsSkeleton() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-3xl border border-border bg-card p-7 shadow-elegant"
        >
          <div className="h-11 w-11 rounded-2xl bg-secondary" />
          <div className="mt-5 h-5 w-2/3 rounded bg-secondary" />
          <div className="mt-3 h-4 w-full rounded bg-secondary" />
          <div className="mt-2 h-4 w-5/6 rounded bg-secondary" />
          <div className="mt-6 border-t border-border pt-4">
            <div className="h-4 w-24 rounded bg-secondary" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfessionalExpertise() {
  return (
    <section className="border-y border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Professional Expertise" title="Capabilities honed through institutional practice." />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-emerald-glow/40"
            >
              {(() => {
                const Icon = e.icon;
                return <Icon className="h-5 w-5 text-emerald-glow" />;
              })()}
              <h3 className="mt-4 font-display text-base font-medium text-foreground">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Research Methodology" title="A disciplined, field-first working process." />

        <ol className="relative mt-16 space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:space-y-4">
          {methodology.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-elegant"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest font-display text-sm text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.note}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeaturedExperience() {
  return (
    <section className="border-y border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Featured Experience"
          title="Selected assignments from the founder's career."
          description="Major Himalayan environmental research projects supported through fieldwork, documentation and coordination."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
            >
              <img src={f.image} alt={f.name} className="h-56 w-full object-cover" />

              <div className="flex flex-1 flex-col p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-glow">{f.area}</p>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-foreground">{f.name}</h3>

                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Duration</dt>
                    <dd className="text-foreground">{f.duration}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Role</dt>
                    <dd className="text-foreground">{f.role}</dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.summary}</p>

                <div className="mt-auto pt-6">
                  <Button asChild variant="ghost" className="rounded-full border border-border">
                    <Link to="/projects">
                      Explore experience
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyWorkWithUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Why Work With Us" title="Trusted by institutions across the Himalaya." />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-3xl border border-border bg-card p-7 shadow-elegant"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationCTA() {
  return (
    <section className="pb-32 pt-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-forest p-10 text-primary-foreground shadow-lift sm:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-glow/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-glow/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-glow">Consultation</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-5xl">
              Need an experienced environmental research professional?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Let's discuss your project — from field survey design to institutional reporting.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-parchment text-forest hover:bg-parchment/90">
                <Link to="/contact">
                  Request consultation
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}