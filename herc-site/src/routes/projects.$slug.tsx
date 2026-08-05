import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Download,
  MapPin,
  Target,
  FlaskConical,
  Map as MapIcon,
  Users,
  Package,
  Images,
  BookOpen,
  Wrench,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/projects/lightbox";
import { getProject, projects, relatedProjects, type Project } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — HERC Projects` : "Project — HERC";
    const description = p?.summary ?? "HERC project record.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ProjectDetail,
});

const sections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "objectives", label: "Objectives", icon: Target },
  { id: "methodology", label: "Methodology", icon: FlaskConical },
  { id: "study-area", label: "Study Area", icon: MapIcon },
  { id: "team", label: "Team", icon: Users },
  { id: "deliverables", label: "Deliverables", icon: Package },
  { id: "timeline", label: "Timeline", icon: Calendar },
  { id: "gallery", label: "Gallery", icon: Images },
  { id: "downloads", label: "Downloads", icon: Download },
  { id: "services", label: "Services", icon: Wrench },
] as const;

function NotFound() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pb-32 pt-36 sm:pt-44 sm:px-6">
        <h1 className="font-display text-4xl text-foreground">Project not found</h1>
        <p className="mt-4 text-muted-foreground">
          The project you are looking for is not in the current archive.
        </p>
        <Button asChild className="mt-8 rounded-full bg-forest hover:bg-forest-deep">
          <Link to="/projects">
            <ArrowLeft className="mr-1 h-4 w-4" /> All projects
          </Link>
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const [lightbox, setLightbox] = useState<number | null>(null);
  const related = relatedProjects(p.slug, p.researchArea);

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/60 to-forest-deep/10" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
              <span className="rounded-full bg-emerald-glow/25 px-3 py-1 backdrop-blur-md">
                {p.researchArea}
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur-md">
                {p.status}
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] text-white sm:text-6xl"
            >
              {p.title}
            </motion.h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{p.location}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{p.duration}</span>
              <span className="flex items-center gap-2"><Building2 className="h-4 w-4" />{p.fundingAgency}</span>
            </div>
          </div>
        </section>

        {/* Sticky nav + content */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:h-max">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-glow">
                On this page
              </p>
              <nav className="mt-3 -mx-1 flex flex-wrap gap-1 lg:mx-0 lg:flex-col lg:gap-0.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground lg:rounded-lg"
                  >
                    <s.icon className="h-3.5 w-3.5 text-forest" />
                    {s.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 space-y-16">
              <Block id="overview" title="Overview">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p.overview}
                </p>
              </Block>

              <Block id="objectives" title="Objectives">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {p.objectives.map((o, i) => (
                    <li
                      key={o}
                      className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-foreground"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest text-[10px] font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground">{o}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block id="methodology" title="Methodology">
                <div className="grid gap-3 sm:grid-cols-2">
                  {p.methodology.map((m) => (
                    <div
                      key={m}
                      className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </Block>

              <Block id="study-area" title="Study Area">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {p.studyArea}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border bg-card px-3 py-1">
                    <MapPin className="mr-1 inline h-3 w-3 text-forest" />
                    {p.location}
                  </span>
                  <span className="rounded-full border border-border bg-card px-3 py-1">
                    Year: {p.year}
                  </span>
                  <span className="rounded-full border border-border bg-card px-3 py-1">
                    Status: {p.status}
                  </span>
                </div>
              </Block>

              <Block id="team" title="Research Team">
                <div className="grid gap-3 sm:grid-cols-2">
                  {p.team.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-deep font-display text-sm text-primary-foreground">
                        {t.name
                          .split(" ")
                          .map((s) => s[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Block>

              <Block id="deliverables" title="Deliverables">
                <ul className="space-y-2">
                  {p.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-glow" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block id="timeline" title="Timeline">
                <ol className="relative space-y-4 border-l border-border pl-6">
                  {p.timeline.map((t) => (
                    <li key={t.label} className="relative">
                      <span className="absolute -left-[27px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-forest ring-4 ring-background" />
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-glow">
                        {t.date}
                      </p>
                      <p className="mt-1 font-display text-base text-foreground">
                        {t.label}
                      </p>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block id="gallery" title="Photo Gallery">
                <div className="columns-2 gap-3 sm:columns-3 [&>*]:mb-3">
                  {p.gallery.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      onClick={() => setLightbox(i)}
                      className="block w-full overflow-hidden rounded-2xl border border-border transition hover:-translate-y-0.5 hover:shadow-lift"
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
                <Lightbox
                  images={p.gallery}
                  index={lightbox}
                  onClose={() => setLightbox(null)}
                  onIndexChange={setLightbox}
                />
              </Block>

              <Block id="downloads" title="Downloads">
                <div className="grid gap-3 sm:grid-cols-2">
                  {p.downloads.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-forest"
                    >
                      <span className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-deep text-primary-foreground">
                          <Download className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-foreground">
                            {d.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            PDF · {d.size}
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-forest" />
                    </button>
                  ))}
                </div>
              </Block>

              <Block id="services" title="Related Services">
                <div className="flex flex-wrap gap-2">
                  {p.relatedServices.map((s) => (
                    <Link
                      key={s}
                      to="/services"
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:border-forest hover:bg-forest hover:text-primary-foreground"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </Block>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-secondary/40 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                  Related projects
                </h2>
                <Link
                  to="/projects"
                  className="text-sm font-medium text-forest hover:text-forest-deep"
                >
                  View all →
                </Link>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/projects/$slug"
                    params={{ slug: r.slug }}
                    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-elegant transition hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-forest-deep/70 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        {r.researchArea}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-foreground">{r.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{r.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-glow">
              Consultancy
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Building something similar? Let's talk.
            </h2>
            <p className="mt-4 text-muted-foreground">
              HERC accepts a limited number of consultancy engagements each year for
              government, academic and philanthropic partners.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-forest text-primary-foreground hover:bg-forest-deep"
            >
              <Link to="/contact">
                Request consultancy <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-emerald-glow" />
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

// Ensure "projects" symbol is preserved (not tree-shaken from generated types).
export const _projectsCount = projects.length;