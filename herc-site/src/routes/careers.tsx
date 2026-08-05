import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Microscope,
  GraduationCap,
  Users,
  Compass,
  FlaskConical,
  Mail,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — HERC" },
      {
        name: "description",
        content:
          "HERC is not actively hiring at the moment. Researchers, students, interns, consultants and scientists are welcome to share their CV for future opportunities.",
      },
      { property: "og:title", content: "Careers — HERC" },
      {
        property: "og:description",
        content:
          "Not actively hiring. Share your CV for future collaboration and research opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

const audience = [
  { icon: Microscope, title: "Researchers", note: "Field ecologists and environmental scientists with published research or independent study experience." },
  { icon: GraduationCap, title: "Students", note: "Postgraduate and doctoral students seeking field exposure and research participation." },
  { icon: Users, title: "Interns", note: "Short-term internships aligned with ongoing research and documentation activities." },
  { icon: Compass, title: "Environmental Consultants", note: "Specialists in EIA, biodiversity, GIS and technical reporting." },
  { icon: FlaskConical, title: "Scientists", note: "Scientists interested in Himalayan ecology, climate and cryosphere research." },
];

function Page() {
  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
            >
              <BrandMark size="xs" ringed={false} className="h-4 w-4 shadow-none" />
              Careers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: easing }}
              className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              Work alongside a small, field-first practice.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easing }}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We are not actively hiring at the moment. However, we are always
              open to hearing from researchers and practitioners aligned with
              our work.
            </motion.p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-glow" />
              Current status: We are not actively hiring.
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Who can connect with us"
              title="People we're always open to hearing from."
              description="Reach out even when there is no active role — we keep applications on file for future work."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {audience.map((a, i) => (
                <motion.article
                  key={a.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: easing }}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-forest">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-4 sm:pb-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easing }}
              className="rounded-[2rem] bg-gradient-forest px-8 py-14 text-primary-foreground shadow-lift sm:px-14 sm:py-20"
            >
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-glow">
                Share your CV
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                Send us your work.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Email your CV, a short note about your interests and a portfolio
                or publication list. We review each submission carefully.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary-foreground text-forest-deep hover:bg-primary-foreground/90"
                >
                  <a href={`mailto:${siteConfig.email}?subject=Career%20enquiry`}>
                    <Mail className="mr-1 h-4 w-4" />
                    {siteConfig.email}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/contact">
                    Contact office
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
