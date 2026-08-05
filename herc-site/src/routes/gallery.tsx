import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Camera,
  Microscope,
  Users,
  Handshake,
  GraduationCap,
  FlaskConical,
  Leaf,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { SectionHeading } from "@/components/site/section-heading";
import { BrandMark } from "@/components/site/brand-mark";
import { Lightbox } from "@/components/projects/lightbox";
import { useGallery } from "@/hooks/useGallery";
import type { GalleryImage } from "@/types/gallery";

import ogImage from "@/assets/og-image.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — HERC" },
      {
        name: "description",
        content:
          "A photographic record from field work, research, conferences, meetings, training programmes, laboratory work and environmental surveys.",
      },
      { property: "og:title", content: "Gallery — HERC" },
      {
        property: "og:description",
        content:
          "Field work, research activities, conferences, meetings, training programmes, laboratory work and environmental surveys.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

type Photo = {
  src: string;
  caption: string;
};

type Category = {
  id: string;
  label: string;
  icon: typeof Camera;
  photos: Photo[];
};

const CATEGORY_CONFIG = [
  {
    id: "field",
    label: "Field Work",
    icon: Camera,
  },
  {
    id: "research",
    label: "Research Activities",
    icon: Microscope,
  },
  {
    id: "conferences",
    label: "Conferences",
    icon: Users,
  },
  {
    id: "meetings",
    label: "Meetings",
    icon: Handshake,
  },
  {
    id: "training",
    label: "Training Programmes",
    icon: GraduationCap,
  },
  {
    id: "lab",
    label: "Laboratory & Data Work",
    icon: FlaskConical,
  },
  {
    id: "surveys",
    label: "Environmental Surveys",
    icon: Leaf,
  },
] as const;

function createCaption(image: GalleryImage) {
  if (image.description?.trim()) return image.description;
  if (image.title?.trim()) return image.title;
  return "HERC Gallery Image";
}

function Page() {
  const { data: gallery = [] } = useGallery();

  const categories = useMemo<Category[]>(() => {
  return CATEGORY_CONFIG.map((category) => ({
    id: category.id,
    label: category.label,
    icon: category.icon,
    photos: gallery
      .filter((image) => {
        const imageCategory = (image.category ?? "").trim().toLowerCase();
        const categoryLabel = category.label.trim().toLowerCase();

        return imageCategory === categoryLabel;
      })
      .map((image) => ({
        src: image.imageUrl,
        caption: createCaption(image),
      })),
  }));
}, [gallery]);

  const [active, setActive] = useState<string>("field");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const current = useMemo(
    () =>
      categories.find((category) => category.id === active) ??
      categories[0],
    [categories, active]
  );

  const images = useMemo(
    () => current?.photos.map((photo) => photo.src) ?? [],
    [current]
  );
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
              Gallery
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
              A visual record of the work.
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
              Photographs from field work, research, conferences, training and
              environmental survey activities across HERC's project sites in
              the Indian Himalayan region.
            </motion.p>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active === category.id
                      ? "border-forest bg-forest text-primary-foreground"
                      : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <category.icon className="h-3.5 w-3.5" />
                  {category.label}

                  <span className="rounded-full bg-black/10 px-2 py-0.5 text-[10px]">
                    {category.photos.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-8 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={current.label}
              title="Field, research and outreach imagery."
              description="Photographs documenting HERC's work across the Indian Himalayan region. Select an image to view it larger."
            />

            {current.photos.length === 0 ? (
              <div className="mt-12 rounded-2xl border border-dashed border-border py-20 text-center">
                <p className="text-muted-foreground">
                  No images available in this category yet.
                </p>
              </div>
            ) : (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {current.photos.map((photo, index) => (
                  <motion.button
                    key={`${current.id}-${index}`}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                      ease: easing,
                    }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border text-left shadow-elegant"
                    aria-label={photo.caption}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-forest-deep/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <p className="absolute inset-x-3 bottom-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {photo.caption}
                    </p>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </section>
              </main>

      <SiteFooter />
      <FloatingContact />

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}