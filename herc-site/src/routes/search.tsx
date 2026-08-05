import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Search as SearchIcon, ArrowUpRight, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { Input } from "@/components/ui/input";
import { searchIndex, type SearchEntry } from "@/lib/site-config";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — HERC" },
      { name: "description", content: "Search across projects, services, insights, research and gallery content on the HERC website." },
      { property: "og:title", content: "Search — HERC" },
      { property: "og:description", content: "Search across projects, services, insights, research and gallery content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/search" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

const categories = ["All", "Projects", "Services", "Insights", "Research", "Gallery", "Pages"] as const;

function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const results = useMemo<SearchEntry[]>(() => {
    const q = query.trim().toLowerCase();
    return searchIndex.filter((e) => {
      const matchCat = category === "All" || e.category === category;
      const matchQ =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <section className="relative overflow-hidden pb-8 pt-36 sm:pt-44">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-glow" />
              Search
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: easing }}
              className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Search the site.
            </motion.h1>

            <div className="relative mt-8">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, services, insights and more"
                aria-label="Search the site"
                className="h-14 rounded-full border-border bg-card pl-12 pr-4 text-base shadow-elegant"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    category === c
                      ? "border-forest bg-forest text-primary-foreground"
                      : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-4 sm:pb-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {results.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
                No results found for “{query}”.
              </p>
            ) : (
              <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
                {results.map((r) => (
                  <li key={`${r.category}-${r.title}`}>
                    <Link
                      to={r.href}
                      className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-secondary/60"
                    >
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-glow">
                          {r.category}
                        </p>
                        <p className="mt-1 font-display text-lg text-foreground">{r.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
