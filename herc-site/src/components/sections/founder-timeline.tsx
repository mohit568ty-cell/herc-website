import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const milestones = [
  {
    year: "1997",
    title: "Fiber Plant Project",
    body:
      "Led baseline field research on Himalayan fiber plants — one of the earliest systematic ethnobotanical surveys in the Kumaon region.",
  },
  {
    year: "1998",
    title: "Agriculture Diversity Programme",
    body:
      "Documented traditional crop varieties and agrobiodiversity across mid-altitude villages, seeding a two-decade line of work on hill agriculture.",
  },
  {
    year: "2003",
    title: "DOS–DBT Collaborative Projects",
    body:
      "Multi-year field programmes with the Department of Space and Department of Biotechnology on high-altitude ecosystem characterisation.",
  },
  {
    year: "2008",
    title: "ISRO Collaborations",
    body:
      "Ground-truthing campaigns and forest classification protocols contributing to ISRO's national-scale vegetation mapping efforts.",
  },
  {
    year: "2012",
    title: "Benchmark Glacier Studies",
    body:
      "Established long-term monitoring protocols on Sikkim and Ladakh glaciers — foundation of HERC's ongoing cryosphere programme.",
  },
  {
    year: "2016–Now",
    title: "NMHS – PMU Leadership",
    body:
      "Programme Management Unit for the National Mission on Himalayan Studies; coordinating multi-institution research across the IHR.",
  },
];

export function FounderTimeline() {
  const [active, setActive] = useState(0);
  const current = milestones[active];

  return (
    <section id="founder" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] shadow-lift"
          >
            <img
              src={founderImg}
              alt="Portrait of Mr. Jagdish Pandey, Founder of HERC"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Founder
              </p>
              <p className="mt-1 font-display text-2xl text-white">
                Mr. Jagdish Pandey
              </p>
              <p className="mt-1 text-sm text-white/80">
                29+ years across the Indian Himalaya
              </p>
            </div>
          </motion.div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-glow">
              <span className="h-px w-6 bg-emerald-glow/60" />
              An interactive biography
            </span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
              A lifetime of listening to the Himalaya.
            </h2>

            {/* Timeline rail */}
            <div className="relative mt-10">
              <div className="absolute left-4 top-0 h-full w-px bg-border" aria-hidden="true" />
              <ul className="space-y-2">
                {milestones.map((m, i) => {
                  const isActive = i === active;
                  return (
                    <li key={m.year} className="relative pl-12">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className="group w-full text-left"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute left-[9px] top-3 h-3 w-3 rounded-full border-2 transition-all ${isActive ? "border-forest-deep bg-emerald-glow" : "border-border bg-card group-hover:border-forest"}`}
                        />
                        <div className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all ${isActive ? "bg-secondary/70" : "hover:bg-secondary/40"}`}>
                          <span className={`w-20 shrink-0 font-display text-sm font-medium tracking-wide ${isActive ? "text-forest-deep" : "text-muted-foreground"}`}>
                            {m.year}
                          </span>
                          <span className={`text-sm ${isActive ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                            {m.title}
                          </span>
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 pl-4 pr-2 text-sm leading-relaxed text-muted-foreground">
                              {m.body}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative mt-8 rounded-3xl border border-border bg-card p-6">
              <Quote className="absolute -top-3 left-6 h-7 w-7 rounded-full bg-forest p-1.5 text-primary-foreground" />
              <p className="text-pretty text-base leading-relaxed text-foreground/90">
                "The Himalaya deserves an institution that will listen to it for a
                lifetime — not for a project cycle."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                — {current.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}