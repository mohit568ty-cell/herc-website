import { Link } from "@tanstack/react-router";
import { ArrowLeft, Hammer } from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
};

/**
 * Shared placeholder shell for pages that are structurally reserved
 * but not yet implemented. Keeps the site navigable and preserves
 * SEO/head structure while feature work is scheduled.
 */
export function PagePlaceholder({ title, eyebrow, description }: Props) {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-5xl px-4 pb-32 pt-36 sm:pt-44 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <Hammer className="h-3.5 w-3.5" />
          {eyebrow ?? "In development"}
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        <div className="mt-10">
          <Button
            asChild
            variant="ghost"
            className="rounded-full border border-border"
          >
            <Link to="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {[
            "Editorial content",
            "Data & downloads",
            "Contact & partnerships",
          ].map((t, i) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-glow">
                0{i + 1}
              </p>
              <p className="mt-3 font-display text-lg text-foreground">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Reserved section — will be authored during the next build phase.
              </p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}