import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — HERC" },
      { name: "description", content: "Terms governing the use of the HERC website and its content." },
      { property: "og:title", content: "Terms & Conditions — HERC" },
      { property: "og:description", content: "Terms governing the use of the HERC website and its content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    heading: "Website Usage",
    body: "By accessing and using this website, you agree to use it lawfully and in accordance with these terms. You agree not to use the site in any way that could damage, disable, overburden or impair it.",
  },
  {
    heading: "Content Ownership",
    body: "All content on this website — including text, imagery, layout and design — is presented for informational purposes. Unless explicitly stated otherwise, content is authored or curated by HERC and its collaborators.",
  },
  {
    heading: "Intellectual Property",
    body: "The website's structure, code and original written content are the intellectual property of HERC. You may not reproduce, republish or redistribute material from this website without prior written permission.",
  },
  {
    heading: "External Links",
    body: "This website may contain links to third-party websites. Such links are provided for convenience only. We do not control and are not responsible for the content, policies or practices of any external sites.",
  },
  {
    heading: "Liability",
    body: "Information on this website is provided in good faith. HERC makes no warranty as to the completeness, accuracy or reliability of the information. Use of the website and reliance on its content is at your own risk.",
  },
  {
    heading: "Changes",
    body: "These terms may be updated periodically. Continued use of the site after such updates constitutes acceptance of the revised terms. Material changes will be reflected on this page along with an updated revision date.",
  },
];

function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These terms govern your use of this website. Please review them carefully."
      updated="July 2026"
      sections={sections}
    />
  );
}
