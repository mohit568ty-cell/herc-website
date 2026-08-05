import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-forest px-6 py-16 text-primary-foreground shadow-lift sm:px-14 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 10% 20%, oklch(0.72 0.15 160 / 0.4), transparent 60%), radial-gradient(500px 260px at 90% 100%, oklch(0.42 0.045 245 / 0.45), transparent 60%)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-glow">
                Need environmental consultancy?
              </span>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
                Let's work together.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                From baseline surveys and EIA studies to multi-year monitoring
                programmes — HERC partners with governments, universities, NGOs
                and industry across the Indian Himalayan region.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full bg-emerald-glow px-8 text-base font-medium text-forest-deep shadow-lift hover:bg-emerald-glow/90"
              >
                <Link to="/contact">
                  Request Consultation
                  <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}