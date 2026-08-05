import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Download, Eye, Library } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { usePublications } from "@/hooks/usePublications";

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  description: string;
  pdfUrl: string;
}

interface PublicationsWrapper {
  publications: Publication[];
}

const COVER_TONES: readonly string[] = [
  "linear-gradient(135deg, oklch(0.32 0.055 155), oklch(0.22 0.045 155))",
  "linear-gradient(135deg, oklch(0.28 0.04 220), oklch(0.20 0.03 210))",
  "linear-gradient(135deg, oklch(0.35 0.04 200), oklch(0.22 0.03 220))",
  "linear-gradient(135deg, oklch(0.30 0.06 130), oklch(0.20 0.04 140))",
  "linear-gradient(135deg, oklch(0.34 0.05 100), oklch(0.22 0.04 110))",
  "linear-gradient(135deg, oklch(0.35 0.06 60), oklch(0.22 0.05 80))",
];

function isPublicationArray(value: unknown): value is Publication[] {
  return Array.isArray(value);
}

function isPublicationsWrapper(value: unknown): value is PublicationsWrapper {
  return (
    typeof value === "object" &&
    value !== null &&
    "publications" in value &&
    Array.isArray((value as { publications: unknown }).publications)
  );
}

function extractPublications(value: unknown): Publication[] {
  if (isPublicationArray(value)) {
    return value;
  }
  if (isPublicationsWrapper(value)) {
    return value.publications;
  }
  return [];
}

function extractErrorMessage(value: unknown): string {
  if (value instanceof Error && value.message) {
    return value.message;
  }
  if (typeof value === "string" && value.length > 0) {
    return value;
  }
  return "We couldn't load the publications library. Please try again shortly.";
}

export function PublicationsLibrary() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError, error } = usePublications();

  const rawData: unknown = data;
  const publications = extractPublications(rawData);
  const hasPublications = publications.length > 0;

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-book]");
    const step = card ? card.offsetWidth + 20 : 260;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="publications" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Publications library"
            title="Peer-reviewed. Field-verified. Publicly useful."
            description="Browse the HERC shelf — journal articles, policy briefs, technical reports and field guides."
          />
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              disabled={!hasPublications}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-forest-deep transition-all hover:-translate-y-0.5 hover:border-forest disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              disabled={!hasPublications}
              className="grid h-11 w-11 place-items-center rounded-full bg-forest-deep text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-forest disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="mt-12 -mx-4 flex gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="flex w-[220px] shrink-0 flex-col sm:w-[240px]"
              >
                <div className="aspect-[3/4] animate-pulse rounded-2xl border border-border bg-muted" />
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-9 flex-1 animate-pulse rounded-full bg-muted" />
                  <div className="h-9 w-9 shrink-0 animate-pulse rounded-full bg-muted" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="mt-12 flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 text-center">
            <Library className="h-6 w-6 text-muted-foreground" />
            <p className="max-w-md text-sm text-muted-foreground">
              {extractErrorMessage(error)}
            </p>
          </div>
        ) : !hasPublications ? (
          <div className="mt-12 flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 text-center">
            <Library className="h-6 w-6 text-muted-foreground" />
            <p className="max-w-md text-sm text-muted-foreground">
              No publications are available yet. Check back soon.
            </p>
          </div>
        ) : (
          <div
            ref={scrollerRef}
            className="mt-12 -mx-4 flex gap-5 overflow-x-auto scroll-smooth px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {publications.map((p, i) => (
              <motion.article
                key={p.id}
                data-book
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="group flex w-[220px] shrink-0 snap-start flex-col sm:w-[240px]"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenPdf(p.pdfUrl)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleOpenPdf(p.pdfUrl);
                    }
                  }}
                  aria-label={`Open PDF for ${p.title}`}
                  className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-border shadow-elegant transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-lift"
                  style={{ background: COVER_TONES[i % COVER_TONES.length] }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-black/30"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <div>
                      <span className="line-clamp-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
                        {p.authors}
                      </span>
                      <h3 className="mt-3 line-clamp-4 font-display text-[1.05rem] font-medium leading-tight text-white">
                        {p.title}
                      </h3>
                    </div>
                    <div>
                      <p className="mb-3 line-clamp-2 text-[11px] text-white/80">
                        {p.description}
                      </p>
                      <div className="hairline mb-3 opacity-40" />
                      <p className="line-clamp-1 text-[11px] text-white/70">
                        {p.journal}
                      </p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                        {p.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleOpenPdf(p.pdfUrl);
                    }}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-[11px] font-medium text-forest-deep transition-colors hover:border-forest hover:bg-forest hover:text-primary-foreground"
                  >
                    <Eye className="h-3.5 w-3.5" /> Summary
                  </button>
                  <button
                    type="button"
                    aria-label="Download"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDownload(p.pdfUrl, p.title);
                    }}
                    className="grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-primary-foreground transition-colors hover:bg-forest"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}