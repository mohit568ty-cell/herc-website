import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CloudSun, TreePine, Leaf, Snowflake, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Link } from "@tanstack/react-router";

const tabs = [
  {
    id: "climate",
    label: "Climate Change",
    icon: CloudSun,
    headline: "How monsoon variability is reshaping high-altitude agriculture",
    body:
      "New rainfall data from the Kumaon Himalaya suggests that the timing — not just the volume — of the monsoon is now the dominant risk for hill agriculture. HERC's five-district network has been tracking rain-gauge and phenology data since 2014.",
    stat: { value: "+2.1°C", label: "Winter warming, Kumaon 1980–2024" },
    tone: "linear-gradient(135deg, oklch(0.28 0.04 220), oklch(0.20 0.03 200))",
  },
  {
    id: "forest",
    label: "Forest Conservation",
    icon: TreePine,
    headline: "Van Panchayats are quietly outperforming state forests on carbon",
    body:
      "Two decades of plot-level data from community-managed forests show measurably higher above-ground biomass than adjacent state-managed reserves — and lower fire incidence.",
    stat: { value: "18%", label: "Higher biomass in community forests" },
    tone: "linear-gradient(135deg, oklch(0.28 0.05 155), oklch(0.20 0.04 155))",
  },
  {
    id: "biodiversity",
    label: "Biodiversity",
    icon: Leaf,
    headline: "A quiet resurgence: notes on Himalayan pheasant recovery",
    body:
      "Camera-trap networks across four states record consistent gains in monal and koklass populations after a decade of habitat protection and community anti-poaching efforts.",
    stat: { value: "3,200+", label: "Camera-trap nights, 2015–2024" },
    tone: "linear-gradient(135deg, oklch(0.30 0.05 130), oklch(0.22 0.04 140))",
  },
  {
    id: "glacier",
    label: "Glacier Research",
    icon: Snowflake,
    headline: "What Sikkim's benchmark glaciers are telling us in 2026",
    body:
      "The latest mass-balance measurements from six benchmark glaciers, and what they imply for downstream water security this decade. Loss rates have accelerated post-2018.",
    stat: { value: "-0.68 m", label: "Mean annual balance, w.e." },
    tone: "linear-gradient(135deg, oklch(0.26 0.03 220), oklch(0.20 0.03 210))",
  },
];

export function InsightsPanel() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="insights" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Environmental insights"
          title="Notes from the field."
          description="Long-form dispatches from HERC scientists — organised by domain."
        />

        <div className="mt-10 rounded-3xl border border-border bg-card shadow-elegant">
          {/* Tab strip */}
          <div className="relative flex overflow-x-auto border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={`relative flex shrink-0 items-center gap-2 px-5 py-4 text-sm font-medium transition-colors sm:px-7 ${isActive ? "text-forest-deep" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                  {isActive && (
                    <motion.span
                      layoutId="insights-underline"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-forest"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 sm:p-10"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-glow">
                  Latest · {current.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                  {current.headline}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {current.body}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
  to="/insights"
  className="inline-flex items-center gap-1.5 rounded-full bg-forest-deep px-5 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-forest"
>
  Read article <ArrowUpRight className="h-3.5 w-3.5" />
</Link>
                  <span className="text-xs text-muted-foreground">
                    Est. 6 min read
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className="relative order-first min-h-[260px] overflow-hidden rounded-t-3xl lg:order-last lg:rounded-l-none lg:rounded-r-3xl"
              style={{ background: current.tone }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-visual"}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(2px 2px at 20% 30%, white 40%, transparent 41%), radial-gradient(1.5px 1.5px at 70% 60%, white 40%, transparent 41%), radial-gradient(1px 1px at 40% 80%, white 40%, transparent 41%)",
                    }}
                  />
                  <div className="relative">
                    <p className="font-display text-5xl font-medium text-white sm:text-6xl">
                      {current.stat.value}
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-white/80">
                      {current.stat.label}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}