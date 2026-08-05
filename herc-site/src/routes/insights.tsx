import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Search,
  Sparkles,
  BookOpen,
  Notebook,
  Megaphone,
  Users,
  GraduationCap,
  Newspaper,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — HERC" },
      {
        name: "description",
        content:
          "A knowledge centre for research updates, field notes, awareness material, workshops and announcements from HERC.",
      },
      { property: "og:title", content: "Insights — HERC" },
      {
        property: "og:description",
        content:
          "Research updates, field notes, awareness material, workshops and announcements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

type Category = {
  id: string;
  label: string;
  icon: typeof BookOpen;
  description: string;
};

const categories: Category[] = [
  { id: "research", label: "Research Updates", icon: BookOpen, description: "Progress notes from ongoing research and field studies." },
  { id: "field", label: "Field Notes", icon: Notebook, description: "Short dispatches from field investigations across the Himalaya." },
  { id: "awareness", label: "Environmental Awareness", icon: Megaphone, description: "Public-facing notes on environmental issues and observations." },
  { id: "conference", label: "Conference Participation", icon: Users, description: "Notes from conferences, symposia and academic meetings." },
  { id: "workshops", label: "Workshops & Training", icon: GraduationCap, description: "Training programmes and capacity-building sessions." },
  { id: "news", label: "News & Announcements", icon: Newspaper, description: "Institutional updates and announcements." },
];

function Page() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories.filter((c) => {
      const matchCat = active === "all" || c.id === active;
      const matchQ = !q || c.label.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, active]);

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
              Knowledge centre
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: easing }}
              className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              Insights from HERC.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easing }}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Research updates, field notes and announcements will be published
              here as they become available.
            </motion.p>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-elegant sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search insights"
                  aria-label="Search insights"
                  className="rounded-full border-border pl-9"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[{ id: "all", label: "All" }, ...categories].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActive(c.id)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      active === c.id
                        ? "border-forest bg-forest text-primary-foreground"
                        : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-8 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Sections"
              title="Organised by topic."
              description="Categories are ready for content — nothing has been invented in the meantime."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c, i) => (
                <motion.article
                  key={c.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: easing }}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-forest">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                    {c.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  <div className="mt-6 hairline" />
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    Content will be published as research updates become available.
                  </p>
                </motion.article>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-full rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
                  No sections match your search.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
