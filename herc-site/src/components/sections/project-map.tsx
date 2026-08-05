import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowUpRight, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";

// Adjust this if project images live under a different public path.
const IMAGE_BASE = "/images/herc/";
const AUTO_SLIDE_MS = 5000;

type ProjectEntry = {
  id: string;
  year: string;
  title: string;
  duration: string;
  location: string;
  category: string;
  description: string;
  image: string;
};

const projects: ProjectEntry[] = [
  {
    id: "fiber-plant",
    year: "1997",
    title: "Fiber Plant Project",
    duration: "1997",
    location: "Uttarakhand Himalaya",
    category: "Field Survey",
    description:
      "Contributed to field investigations supporting a fiber plant initiative, including site assessment, sample collection and preliminary reporting for local resource planning.",
    image: "gps-survey-team-group-01.jpeg",
  },
  {
    id: "mre",
    year: "1998",
    title: "MRE Project",
    duration: "1998",
    location: "Uttarakhand Himalaya",
    category: "Field Survey",
    description:
      "Supported the Micro-level Resource Evaluation (MRE) project, carrying out ground surveys and data compilation to inform localized natural-resource management decisions.",
    image: "gps-survey-team-group-01.jpeg",
  },
  {
    id: "agriculture",
    year: "1999",
    title: "Agriculture Diversity Project",
    duration: "1999",
    location: "Uttarakhand",
    category: "Biodiversity",
    description:
      "Documented crop and agro-biodiversity patterns across mid-hill farming communities, recording traditional cultivation practices alongside quadrat-based field surveys.",
    image: "ecology-quadrat-survey-plot-02.jpeg",
  },
  {
    id: "indigenous-knowledge",
    year: "2001",
    title: "Indigenous Knowledge System",
    duration: "2001",
    location: "Central Himalaya",
    category: "Field Survey",
    description:
      "Recorded and cataloged indigenous ecological knowledge held by Himalayan communities, linking traditional practices to sustainable resource-use planning.",
    image: "gps-survey-team-group-01.jpeg",
  },
  {
    id: "isro-gbp",
    year: "2004",
    title: "ISRO-GBP Global Climate Change Studies",
    duration: "2004",
    location: "High Altitude Himalaya",
    category: "Climate Change",
    description:
      "Contributed to the ISRO Geosphere-Biosphere Programme's high-altitude climate change studies, supporting monitoring-station data collection and long-term trend analysis.",
    image: "satellite-map-monitoring-stations-01.jpeg",
  },
  {
    id: "kumaon-1",
    year: "2007",
    title: "Glacier Studies of Kumaon Himalaya",
    duration: "2007",
    location: "Kumaon, Uttarakhand",
    category: "Glacier Research",
    description:
      "Carried out glacier mass-balance and moraine mapping fieldwork across the Kumaon Himalaya, contributing to baseline data on regional glacial retreat.",
    image: "glacier-moraine-valley-03.jpeg",
  },
  {
    id: "water-management",
    year: "2010",
    title: "Participatory Water Management Plan",
    duration: "2010",
    location: "Mid-Altitude Himalayan Villages",
    category: "Water Resources",
    description:
      "Facilitated community-based water resource planning in mid-altitude villages, combining hydrological assessment with participatory consultation to improve local water security.",
    image: "village-houses-mountainside-01.jpeg",
  },
  {
    id: "kumaon-2",
    year: "2011",
    title: "Glacier Studies of Kumaon Himalaya Phase-II",
    duration: "2011",
    location: "Kumaon, Uttarakhand",
    category: "Glacier Research",
    description:
      "Extended earlier glacier research with follow-up fieldwork, including ice-cave observation and updated glacial extent mapping to track continued change over time.",
    image: "researcher-glacier-icecave-01.jpeg",
  },
  {
    id: "gangotri",
    year: "2013–2016",
    title: "Geodynamics & Hydrochemical Study of Gangotri Glacier",
    duration: "2013–2016",
    location: "Gangotri Glacier, Uttarkashi",
    category: "Glacier Research",
    description:
      "Led multi-year fieldwork at the Gangotri Glacier terminus near its Bhagirathi origin, studying geodynamic behavior and hydrochemical characteristics of glacial meltwater.",
    image: "glacier-terminus-bhagirathi-origin-01.jpeg",
  },
  {
    id: "nmhs",
    year: "2016–Present",
    title: "National Mission on Himalayan Studies (NMHS)",
    duration: "2016–Present",
    location: "Almora, Uttarakhand",
    category: "Project Coordination",
    description:
      "Coordinate project activities under the National Mission on Himalayan Studies, supporting institutional reporting, conference proceedings and cross-program documentation.",
    image: "nmhs-conference-session-newdelhi-01.jpeg",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
  }),
};

export function ProjectMap() {
  const [[index, direction], setSlide] = useState<[number, number]>([
    projects.length - 1,
    0,
  ]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = projects[index];

  const goTo = useCallback((nextIndex: number, dir: number) => {
    const wrapped = (nextIndex + projects.length) % projects.length;
    setSlide([wrapped, dir]);
  }, []);

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      goNext();
    }, AUTO_SLIDE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  return (
    <section id="map" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project Timeline"
          title="Nearly Three Decades of Himalayan Field Research"
          description="A chronological record of environmental research, field investigations and project coordination across the Indian Himalaya."
        />

        <div
          className="relative mt-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card/90 shadow-xl backdrop-blur-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-[320px_1fr]"
              >
                <div className="relative h-56 sm:h-64 md:h-auto md:min-h-[320px] overflow-hidden">
                  <img
                    src={`${IMAGE_BASE}${active.image}`}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 lg:bg-gradient-to-r" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    <Tag className="h-3 w-3" /> {active.category}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-forest-deep">
                      <Calendar className="h-3 w-3" /> {active.year}
                    </span>

                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold leading-tight text-foreground">
                      {active.title}
                    </h3>

                    <div className="mt-4 text-sm leading-6 text-muted-foreground line-clamp-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {active.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {active.location}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {active.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-forest-deep px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-forest"
                  >
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next controls */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 -translate-y-1/2 lg:-left-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-elegant backdrop-blur-md transition-transform hover:scale-105 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-deep"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next project"
            className="absolute right-3 top-1/2 -translate-y-1/2 lg:-right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-elegant backdrop-blur-md transition-transform hover:scale-105 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-deep"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {projects.map((entry, i) => {
            const isActive = i === index;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to ${entry.title}`}
                aria-current={isActive}
                className="group relative flex h-4 w-4 items-center justify-center focus-visible:outline-none"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-2.5 w-6 bg-forest-deep"
                      : "h-2 w-2 bg-border group-hover:bg-forest-deep/50"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
