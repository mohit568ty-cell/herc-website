import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
} from "lucide-react";

import { usePublications } from "@/hooks/usePublications";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      {
        title: "Publications — HERC",
      },
      {
        name: "description",
        content:
          "Browse research papers, reports and publications by HERC.",
      },
      {
        property: "og:title",
        content: "Publications — HERC",
      },
      {
        property: "og:description",
        content:
          "Browse research papers, reports and publications by HERC.",
      },
    ],
  }),

  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

function Page() {
  const {
    data: publications,
    isLoading,
    error,
  } = usePublications();

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
              <BrandMark
                size="xs"
                ringed={false}
                className="h-4 w-4 shadow-none"
              />

              Publications
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: easing,
              }}
              className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              Research Publications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: easing,
              }}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Browse research papers, technical reports and
              scientific publications published by HERC.
            </motion.p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Research"
              title="HERC Publications"
            />

            {isLoading && (
              <div className="mt-12 rounded-2xl border p-10 text-center text-muted-foreground">
                Loading publications...
              </div>
            )}

            {!isLoading && error && (
              <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-600">
                Failed to load publications.
              </div>
            )}

            {!isLoading &&
              !error &&
              publications &&
              publications.length === 0 && (
                <div className="mt-12 rounded-2xl border p-10 text-center text-muted-foreground">
                  No publications available yet.
                </div>
              )}

            {!isLoading &&
              !error &&
              publications &&
              publications.length > 0 && (
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  {publications.map((publication, index) => (
                    <motion.a
                      key={publication.id}
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                        ease: easing,
                      }}
                      whileHover={{ y: -4 }}
                      className="group block rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-xl bg-secondary p-3 transition-colors group-hover:bg-primary/10">
                          <FileText className="h-6 w-6 text-forest" />
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="rounded-full border px-3 py-1 text-xs font-medium">
                            {publication.year}
                          </span>

                          <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold transition-colors group-hover:text-primary">
                        {publication.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground">
                        <strong>Authors:</strong>{" "}
                        {publication.authors}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        <strong>Journal:</strong>{" "}
                        {publication.journal}
                      </p>
                                            {publication.description && (
                        <p className="mt-4 line-clamp-4 text-sm leading-6 text-muted-foreground">
                          {publication.description}
                        </p>
                      )}

                      <div className="mt-6 flex items-center justify-between border-t pt-4">
                        <span className="text-xs text-muted-foreground">
                          {new Date(
                            publication.createdAt
                          ).toLocaleDateString()}
                        </span>

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-foreground">
                          Open PDF
                          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}

            <div className="mt-12 flex justify-center">
              <Button
                asChild
                variant="outline"
                className="rounded-full"
              >
                <Link to="/contact">
                  Request a publication
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <FloatingContact />
    </div>
  );
}