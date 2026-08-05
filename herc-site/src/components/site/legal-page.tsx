import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";

const easing = [0.22, 1, 0.36, 1] as const;

export type LegalSection = {
  heading: string;
  body: string | string[];
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

/**
 * Shared shell for legal / static content pages so Privacy, Terms and
 * Disclaimer stay visually and structurally consistent.
 */
export function LegalPage({ eyebrow, title, intro, updated, sections }: Props) {
  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-glow" />
              {eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: easing }}
              className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              {title}
            </motion.h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-border rounded-3xl border border-border bg-card shadow-elegant">
              {sections.map((s, i) => (
                <motion.section
                  key={s.heading}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.03, ease: easing }}
                  className="p-6 sm:p-10"
                >
                  <h2 className="font-display text-xl font-medium text-foreground sm:text-2xl">
                    {i + 1}. {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {(Array.isArray(s.body) ? s.body : [s.body]).map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
