import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HeroSection } from "@/components/sections/hero";
import { ResearchExplorer } from "@/components/sections/research-explorer";
import { ProjectMap } from "@/components/sections/project-map";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import { PublicationsLibrary } from "@/components/sections/publications-library";
import { InsightsPanel } from "@/components/sections/insights-panel";
import { FounderTimeline } from "@/components/sections/founder-timeline";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { CallToAction } from "@/components/sections/cta";
import { FloatingContact } from "@/components/site/floating-contact";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ResearchExplorer />
        <ProjectMap />
        <ProjectsCarousel />
        <PublicationsLibrary />
        <InsightsPanel />
        <FounderTimeline />
        <GalleryMasonry />
        <CallToAction />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
