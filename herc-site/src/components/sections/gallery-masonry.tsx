import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";

import ecologyQuadrat from "@/assets/gallery/ecology-quadrat-wildflowers-01.jpeg";
import glacierTerminus from "@/assets/gallery/glacier-terminus-bhagirathi-origin-01.jpeg";
import gpsSurvey from "@/assets/gallery/gps-survey-team-valley-01.jpeg";
import riverCrossing from "@/assets/gallery/river-crossing-trekking-02.jpeg";
import muleTrail from "@/assets/gallery/mule-pack-train-trail-01.jpeg";
import moraineTeam from "@/assets/gallery/field-team-moraine-walk-01.jpeg";
import nmhsConference from "@/assets/gallery/nmhs-conference-session-newdelhi-01.jpeg";
import villageHouses from "@/assets/gallery/village-houses-mountainside-01.jpeg";

export type FieldNotebookSlide = {
  id: string;
  title: string;
  category: string;
  image: string;
  caption?: string;
};

const defaultSlides: FieldNotebookSlide[] = [
  {
    id: "ecology-quadrat",
    title: "Ecology quadrat survey",
    category: "Biodiversity",
    image: ecologyQuadrat,
    caption: "Vegetation quadrat sampling among alpine wildflowers during a biodiversity survey.",
  },
  {
    id: "glacier-terminus",
    title: "Glacier terminus, Bhagirathi origin",
    category: "Cryosphere",
    image: glacierTerminus,
    caption: "Documenting the glacier terminus at the origin of the Bhagirathi river system.",
  },
  {
    id: "gps-survey",
    title: "GPS field survey, valley traverse",
    category: "Geospatial",
    image: gpsSurvey,
    caption: "Ground-truthing terrain data with GPS instrumentation across a mountain valley.",
  },
  {
    id: "river-crossing",
    title: "River crossing en route to a study site",
    category: "Hydrology",
    image: riverCrossing,
    caption: "Fording a Himalayan river during a field expedition to a watershed monitoring site.",
  },
  {
    id: "mule-trail",
    title: "Mule pack train, mountain trail",
    category: "Field Logistics",
    image: muleTrail,
    caption: "Mule pack trains carrying field equipment along remote Himalayan trails.",
  },
  {
    id: "moraine-team",
    title: "Field team on glacial moraine",
    category: "Fieldwork",
    image: moraineTeam,
    caption: "The field team traversing a glacial moraine during a cryosphere expedition.",
  },
  {
    id: "nmhs-conference",
    title: "NMHS conference session, New Delhi",
    category: "Outreach",
    image: nmhsConference,
    caption: "Presenting research findings at a National Mission on Himalayan Studies session.",
  },
  {
    id: "village-houses",
    title: "Mountain village, field study area",
    category: "Community & Livelihoods",
    image: villageHouses,
    caption: "A mountainside village within one of HERC's community and livelihoods study areas.",
  },
];

type Props = {
  slides?: FieldNotebookSlide[];
};

export function GalleryMasonry({ slides = defaultSlides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // Keyboard nav for the carousel itself
  useEffect(() => {
    if (!emblaApi) return;
    const onKey = (e: KeyboardEvent) => {
      if (lightbox !== null) return;
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    const node = emblaApi.rootNode();
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [emblaApi, lightbox, scrollPrev, scrollNext]);

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + slides.length) % slides.length));
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % slides.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, slides.length]);

  return (
    <section id="gallery" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Field notebook"
          title="Windows into how our research is made."
          description="Photographs from field seasons across the Indian Himalaya. Click any tile to enlarge."
        />

        <div className="relative mt-12">
          <div
            ref={emblaRef}
            className="overflow-hidden focus:outline-none"
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Field notebook photographs"
          >
            <div className="flex -ml-4 sm:-ml-6">
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 sm:pl-6 lg:basis-1/4"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                >
                  <motion.button
                    type="button"
                    onClick={() => setLightbox(i)}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-border bg-muted shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm backdrop-blur">
                      {s.category}
                    </span>
                    <span className="absolute inset-x-4 bottom-4 text-left">
                      <span className="block font-display text-lg leading-snug text-white drop-shadow">
                        {s.title}
                      </span>
                    </span>
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lift backdrop-blur transition hover:bg-background sm:grid lg:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lift backdrop-blur transition hover:bg-background sm:grid lg:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selectedIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={slides[lightbox].title}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 text-white backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <BrandMark size="xs" ringed={false} className="h-7 w-7 shadow-none" />
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/80">
                HERC · Field Notebook
              </span>
            </div>

            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i === null ? i : (i - 1 + slides.length) % slides.length));
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i === null ? i : (i + 1) % slides.length));
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-3xl bg-black shadow-lift">
                <img
                  src={slides[lightbox].image}
                  alt={slides[lightbox].title}
                  loading="lazy"
                  className="h-auto max-h-[75vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-6 text-white">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
                    {slides[lightbox].category}
                  </p>
                  <p className="mt-1 font-display text-xl">{slides[lightbox].title}</p>
                  {slides[lightbox].caption && (
                    <p className="mt-1 max-w-2xl text-sm text-white/70">
                      {slides[lightbox].caption}
                    </p>
                  )}
                </div>
                <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  {lightbox + 1} / {slides.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
