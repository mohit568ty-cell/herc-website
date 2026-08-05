import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — HERC" },
      { name: "description", content: "Information about the professional experience, project references and affiliations described on this website." },
      { property: "og:title", content: "Disclaimer — HERC" },
      { property: "og:description", content: "Information about the professional experience, project references and affiliations described on this website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/disclaimer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    heading: "Professional Experience",
    body: `Project information presented on this website reflects the professional experience and documented contributions of ${siteConfig.founder}. Descriptions are based on records available at the time of publication and may be updated as additional documentation becomes available.`,
  },
  {
    heading: "References to Organisations and Projects",
    body: "References to organisations, agencies or projects do not imply ownership, endorsement, sponsorship or official affiliation unless explicitly stated. Where an association is referenced, it describes a professional contribution or engagement and not an institutional relationship beyond that scope.",
  },
  {
    heading: "Use of Information",
    body: "Content on this website is provided for informational purposes. It should not be interpreted as legal, regulatory or technical advice for any specific project. Independent verification and formal engagement are recommended before relying on any material for decision-making.",
  },
  {
    heading: "Third-Party Material",
    body: "Where third-party names, marks, or references appear, they remain the property of their respective owners and are used only for descriptive and referential purposes.",
  },
  {
    heading: "Updates",
    body: "This disclaimer may be updated from time to time to reflect the evolving scope of work and documentation on this website.",
  },
];

function Page() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="This page sets out how project information, references and affiliations described on this website should be understood."
      updated="July 2026"
      sections={sections}
    />
  );
}
