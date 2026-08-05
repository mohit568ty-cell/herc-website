import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects-data";

export function ProjectsTimeline({ items }: { items: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  const sorted = [...items].sort((a, b) => a.year - b.year);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-3 text-xs text-muted-foreground">
          <span className="font-display text-2xl text-foreground">1997</span>
          <span className="hairline w-24" />
          <span>Present</span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll timeline left"
            onClick={() => scrollBy(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-forest-deep transition hover:border-forest"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll timeline right"
            onClick={() => scrollBy(1)}
            className="grid h-10 w-10 place-items-center rounded-full bg-forest-deep text-primary-foreground transition hover:bg-forest"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[38px] h-px bg-linear-to-r from-transparent via-border to-transparent"
        />
        <div
          ref={ref}
          className="-mx-4 flex gap-6 overflow-x-auto scroll-smooth px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {sorted.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative w-[280px] shrink-0 snap-start sm:w-[320px]"
            >
              <div className="flex flex-col items-start">
                <span className="font-display text-lg text-forest-deep">{p.year}</span>
                <span className="mt-2 grid h-4 w-4 place-items-center">
                  <span className="absolute h-4 w-4 rounded-full bg-emerald-glow/25" />
                  <span className="relative h-2 w-2 rounded-full bg-forest ring-4 ring-background" />
                </span>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-elegant transition hover:-translate-y-0.5 hover:shadow-lift">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-glow">
                  {p.researchArea}
                </p>
                <h4 className="mt-2 font-display text-base leading-snug text-foreground">
                  {p.title}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground">{p.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}