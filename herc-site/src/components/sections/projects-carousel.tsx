import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, MapPin, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects-data";
export function ProjectsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 400;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
         <SectionHeading
  eyebrow="Project's"
  title="Supporting Himalayan Environmental Research Since 1997"
  description="A selection of environmental research projects reflecting nearly three decades of fieldwork, project documentation, and institutional support across the Indian Himalaya."
/>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-forest-deep transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-elegant"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-forest-deep text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-forest hover:shadow-lift"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 -mx-4 flex gap-6 overflow-x-auto scroll-smooth px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title + i}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:w-[420px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {p.researchArea}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-medium leading-snug text-foreground">
                  {p.title}
                </h3>
                <dl className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5 shrink-0 text-forest" />
                
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-forest" />
                    <span>{p.location}</span>
                  </div>
                </dl>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-forest transition-colors hover:text-forest-deep"
                >
  Read more <ArrowRight className="h-4 w-4" />
</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}