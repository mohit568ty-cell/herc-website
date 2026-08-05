import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import biodiversityImg from "@/assets/gallery/biodiversity.jpg";
import forestImg from "@/assets/gallery/forest-ecology.jpg";
import climateImg from "@/assets/gallery/climate-change.jpg";
import gisImg from "@/assets/gallery/gisandremote.jpg";
import wildlifeImg from "@/assets/gallery/cheetah.jpg";
import eiaImg from "@/assets/gallery/eiassesment.jpg";
import {
  Leaf,
  TreePine,
  CloudSun,
  Map,
  PawPrint,
  ClipboardCheck,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";

const areas = [
  {
    icon: Leaf,
    title: "Biodiversity",
    slug: "biodiversity",
    image: biodiversityImg,
    gradient: "linear-gradient(180deg, rgba(16,185,129,0.85), rgba(16,185,129,0.25))",
    desc: "Studying Himalayan species diversity and the relationships that sustain resilient ecosystems.",
  },
  {
    icon: TreePine,
    title: "Forest Ecology",
    slug: "forest-ecology",
    image: forestImg,
    gradient: "linear-gradient(180deg, rgba(34,197,94,0.85), rgba(34,197,94,0.25))",
    desc: "Investigating forest structure, regeneration, and carbon dynamics across mountain landscapes.",
  },
  {
    icon: CloudSun,
    title: "Climate Change",
    slug: "climate-change",
    image: climateImg,
    gradient: "linear-gradient(180deg, rgba(14,165,233,0.85), rgba(14,165,233,0.25))",
    desc: "Tracking climate shifts and their impacts on Himalayan hydrology, weather, and communities.",
  },
  {
    icon: Map,
    title: "GIS & Remote Sensing",
    slug: "gis-remote-sensing",
    image: gisImg,
    gradient: "linear-gradient(180deg, rgba(236,72,153,0.85), rgba(236,72,153,0.25))",
    desc: "Mapping terrain, vegetation, and change with satellite imagery and spatial analysis techniques.",
  },
  {
    icon: PawPrint,
    title: "Wildlife Conservation",
    slug: "wildlife-conservation",
    image: wildlifeImg,
    gradient: "linear-gradient(180deg, rgba(234,179,8,0.85), rgba(234,179,8,0.25))",
    desc: "Protecting mountain wildlife through habitat research, movement studies, and community engagement.",
  },
  {
    icon: ClipboardCheck,
    title: "Environmental Impact Assessment",
    slug: "environmental-impact-assessment",
    image: eiaImg,
    gradient: "linear-gradient(180deg, rgba(249,115,22,0.85), rgba(249,115,22,0.25))",
    desc: "Evaluating development impacts and guiding sustainable decision-making in fragile mountain zones.",
  },
];

export function ResearchExplorer() {
  const [active, setActive] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="research" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research explorer"
          title="Six domains, one mountain system."
          description="Hover a card to reveal its focus. Interconnected programmes that observe the Himalaya as a single living system."
        />
      </div>

      <div className="relative mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSlideChange={() => setActive(null)}
          loop
          speed={600}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".research-prev",
            nextEl: ".research-next",
          }}
          pagination={{
            el: ".research-pagination",
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
          }}
          className="!overflow-hidden !px-4 sm:!px-6 lg:!px-8 !pb-4"
        >
          {areas.map((a, i) => {
            const isActive = active === i;
            return (
              <SwiperSlide key={a.title} className="!h-auto">
                <motion.article
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive((v) => (v === i ? null : v))}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  animate={{ scale: isActive ? 1.02 : 1 }}
                  className="group relative aspect-[5/4] w-full cursor-pointer overflow-hidden rounded-3xl border border-border shadow-elegant outline-none focus-visible:ring-2 focus-visible:ring-emerald-glow"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className={`h-full w-full object-cover transition-transform duration-700 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.25), rgba(0,0,0,0.45))",
                      }}
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background: a.gradient,
                        opacity: 0.25,
                        mixBlendMode: "overlay",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(2px 2px at 20% 30%, white 40%, transparent 41%), radial-gradient(1.5px 1.5px at 60% 70%, white 40%, transparent 41%), radial-gradient(1px 1px at 40% 80%, white 40%, transparent 41%)",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-md">
                        <a.icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-medium leading-tight text-white sm:text-[1.6rem]">
                        {a.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="text-sm leading-relaxed text-white/85">
                              {a.desc}
                            </p>
                            <Link
                              to="/research/$slug"
                              params={{ slug: a.slug }}
                              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                            >
                              Explore
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation arrows */}
        <button
          type="button"
          aria-label="Previous research area"
          className="research-prev absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 p-2.5 text-foreground shadow-elegant backdrop-blur-md transition hover:bg-background sm:flex sm:left-4"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          aria-label="Next research area"
          className="research-next absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 p-2.5 text-foreground shadow-elegant backdrop-blur-md transition hover:bg-background sm:flex sm:right-4"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
        </button>

        {/* Pagination dots */}
        <div className="research-pagination mt-8 flex items-center justify-center gap-2" />
      </div>

      <style>{`
        .research-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: hsl(var(--foreground) / 0.25);
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .research-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: hsl(var(--emerald-glow, 150 60% 50%));
        }
      `}</style>
    </section>
  );
}
