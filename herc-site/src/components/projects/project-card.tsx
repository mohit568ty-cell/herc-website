import { motion } from "motion/react";
import { ArrowUpRight, Building2, Calendar, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects-data";

const statusStyles: Record<Project["status"], string> = {
  Ongoing: "bg-emerald-glow/15 text-emerald-glow border-emerald-glow/30",
  Completed: "bg-slate-ink/10 text-slate-ink border-slate-ink/20",
  Upcoming: "bg-forest/10 text-forest border-forest/25",
};

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/75 via-forest-deep/10 to-transparent" />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {p.researchArea}
          </span>
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur-md ${statusStyles[p.status]}`}
          >
            {p.status}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-foreground">
          {p.title}
        </h3>
        <dl className="mt-3 space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-forest" />
            <span className="truncate">{p.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-forest" />
            <span>{p.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-3.5 w-3.5 shrink-0 text-forest" />
            <span className="truncate">{p.fundingAgency}</span>
          </div>
        </dl>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {p.summary}
        </p>
        {p.wikipedia ? (
          <a
            href={p.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-forest transition-colors hover:text-forest-deep"
          >
            Read more <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}