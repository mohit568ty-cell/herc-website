import { useRef, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import heroImage from "@/assets/hero-himalaya.jpg";
import { BrandMark } from "@/components/site/brand-mark";

const stats = [
  { value: "29+", label: "Years of Experience" },
  { value: "100+", label: "Environmental Surveys" },
  { value: "50+", label: "Research Projects" },
  { value: "Gov · Academia", label: "Collaborations" },
];

function Particles({ count = 22 }: { count?: number }) {
  const shouldReduce = useReducedMotion();
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.4,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 10,
        drift: -20 - Math.random() * 40,
      })),
    [count],
  );
  if (shouldReduce) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            filter: "blur(0.5px)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.9, 0],
            y: [0, d.drift],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[86svh] items-center overflow-hidden pt-32"
    >
      {/* Parallax background */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20 will-change-transform"
      >
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* Gradient overlays */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.12 0.02 200 / 0.75) 0%, oklch(0.14 0.02 200 / 0.55) 35%, oklch(0.14 0.02 200 / 0.4) 70%, var(--background) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(700px 340px at 12% 28%, oklch(0.22 0.05 155 / 0.55), transparent 65%), radial-gradient(700px 340px at 92% 78%, oklch(0.42 0.045 245 / 0.35), transparent 65%)",
          }}
        />
      </motion.div>

      <Particles />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur-md"
          >
            <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" />
            {siteConfig.tagline}
          </motion.span>

          <h1 className="mt-7 text-balance font-display text-4xl font-medium leading-[1.02] text-white sm:text-5xl lg:text-[4.5rem]">
            {"Himalayan Environmental Research & Consultancy"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block pr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="ml-1 italic"
              style={{
                background:
                  "linear-gradient(120deg, oklch(0.92 0.10 160), oklch(0.75 0.14 160) 60%, oklch(0.96 0.04 100))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              (HERC)
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Advancing Environmental Research, Biodiversity Conservation, and
            Sustainable Development through Science, Innovation, and Field Excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-emerald-glow px-6 text-forest-deep shadow-lift hover:bg-emerald-glow/90"
            >
              <Link to="/research">
                Explore Research
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full border border-white/30 bg-white/5 px-6 text-white backdrop-blur-md hover:bg-white/15 hover:text-white"
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </motion.div>
        </div>

        {/* Animated statistics */}
        <motion.dl
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 1.15 } },
          }}
          className="mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="glass-panel rounded-2xl px-4 py-4 sm:px-5 sm:py-5"
              style={{
                background: "color-mix(in oklab, oklch(0.14 0.02 200) 40%, transparent)",
                borderColor: "color-mix(in oklab, white 18%, transparent)",
              }}
            >
              <dt className="font-display text-2xl font-medium text-white sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll indicator removed for a cleaner premium feel */}
    </section>
  );
}