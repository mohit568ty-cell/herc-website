import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, FileText, Download, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/projects/animated-counter";
import {
  ProjectFilters,
  defaultFilters,
  type Filters,
} from "@/components/projects/project-filters";
import { ProjectCard } from "@/components/projects/project-card";
import { IndiaMap } from "@/components/projects/india-map";
import { ProjectsTimeline } from "@/components/projects/projects-timeline";
import {
  projects,
  projectStats,
  publicationsMock,
} from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Research & Projects — HERC" },
      { name: "description", content: "Explore HERC's field projects, project atlas and research timeline across the Indian Himalayan region." },
      { property: "og:title", content: "Research & Projects — HERC" },
      { property: "og:description", content: "Explore HERC's field projects, project atlas and research timeline across the Indian Himalayan region." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Page,
});

function Page() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.area !== "all" && p.researchArea !== filters.area) return false;
      if (filters.state !== "all" && p.state !== filters.state) return false;
      if (filters.year !== "all" && String(p.year) !== filters.year) return false;
      if (filters.funder !== "all" && p.fundingAgency !== filters.funder) return false;
      if (filters.status !== "all" && p.status !== filters.status) return false;
      if (filters.q) {
        const q = filters.q.toLowerCase();
        const hay = [p.title, p.location, p.fundingAgency, p.summary, p.researchArea]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-24 -z-10 h-[520px] bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.62_0.14_160/0.18),transparent_70%)]"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-glow">
              <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" /> Research & Projects
            </span>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-6xl">
              <span className="text-gradient-forest">Field science</span> for a
              living Himalaya.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A working archive of HERC's field programmes — biodiversity monitoring,
              cryosphere baselines, spring revival, wildlife corridors and community
              conservation across the Indian Himalayan region. Every project is
              commissioned by government, academic or philanthropic partners and
              designed to leave open, verifiable evidence behind.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { label: "Years Experience", value: projectStats.years, suffix: "+" },
                { label: "Field Surveys", value: projectStats.fieldSurveys, suffix: "+" },
                { label: "Research Projects", value: projectStats.researchProjects, suffix: "+" },
                { label: "Collaborations", value: projectStats.collaborations, suffix: "+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass-panel rounded-2xl p-5 shadow-elegant"
                >
                  <p className="font-display text-3xl text-forest-deep sm:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {s.label === "Collaborations" ? "Govt · Academic" : s.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {s.label === "Collaborations" ? "Collaborations" : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atlas */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Project atlas"
              title="Where HERC works on the map."
              description="Tap a marker to preview a project. Zoom to focus on a region — every marker links to a full project record."
            />
            <div className="mt-10">
              <IndiaMap projects={projects} />
            </div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section id="browse" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Browse projects"
              title="Filter by domain, geography and agency."
              description="Search the full archive. Filters combine — clear them any time to reset the view."
            />
            <div className="mt-10">
              <ProjectFilters
                filters={filters}
                onChange={setFilters}
                count={filtered.length}
              />
            </div>

            <motion.div
              layout
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <ProjectCard key={p.slug} p={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div className="mt-10 rounded-3xl border border-dashed border-border p-12 text-center">
                <p className="font-display text-lg text-foreground">
                  No projects match those filters.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try clearing a filter or widening the search.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-secondary/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Research timeline"
              title="Twenty-nine years, one continuous record."
              description="A horizontal history of HERC's field programmes, from the first Kumaon transects in 1997 to today's high-altitude weather network."
            />
            <div className="mt-10">
              <ProjectsTimeline items={projects} />
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Publications"
              title="Reports, briefs and papers."
              description="Every project produces a public deliverable. Download the latest reports below."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {publicationsMock.map((pub, i) => (
                <motion.article
                  key={pub.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-elegant transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-deep text-primary-foreground">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-glow">
                      {pub.category}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg leading-snug text-foreground">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{pub.date} · {pub.size}</p>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 self-start rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-forest-deep transition-colors hover:border-forest hover:bg-forest hover:text-primary-foreground"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-forest p-8 text-primary-foreground shadow-lift sm:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, white 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, white 1px, transparent 1.5px)",
                  backgroundSize: "40px 40px, 60px 60px",
                }}
              />
              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
                    Consultancy
                  </span>
                  <h2 className="mt-3 font-display text-3xl leading-[1.05] sm:text-5xl">
                    Need a similar research project?
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                    From baseline assessments to long-term monitoring programmes,
                    HERC partners with governments, universities and philanthropies
                    to design evidence-led research at Himalayan scale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-forest-deep hover:bg-white/90"
                  >
                    <Link to="/contact">
                      Request consultancy
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-full border border-white/25 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/services">Explore services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
