import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — HERC" },
      { name: "description", content: "How HERC collects, uses and protects information shared through this website." },
      { property: "og:title", content: "Privacy Policy — HERC" },
      { property: "og:description", content: "How HERC collects, uses and protects information shared through this website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    heading: "Information Collection",
    body: "We collect only the information you choose to share with us — typically through the contact form, email correspondence, or when you request a proposal. We do not knowingly collect personal information from children.",
  },
  {
    heading: "Contact Form Data",
    body: "When you submit an enquiry, we collect your name, email address, phone number (if provided), organisation and message. This information is used only to respond to your enquiry and to maintain a record of professional correspondence.",
  },
  {
    heading: "Cookies",
    body: "This website uses a minimal set of cookies required for the site to function correctly and to remember basic preferences such as theme selection. We do not use cookies for advertising or cross-site tracking.",
  },
  {
    heading: "Analytics",
    body: "If analytics are enabled, they are used only in aggregate to understand which pages are useful to visitors and to improve the site. No personally identifiable information is used for analytics reporting.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable technical and organisational measures to protect the information you share with us against unauthorised access, disclosure, alteration or loss. No method of transmission over the internet is fully secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "User Rights",
    body: `You may request access to, correction of, or deletion of any personal information we hold about you. To make such a request, please write to us at ${siteConfig.email}.`,
  },
  {
    heading: "Policy Updates",
    body: "This policy may be updated from time to time. Any material changes will be reflected on this page along with an updated revision date.",
  },
];

function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what information we collect through this website, how we use it, and the choices available to you."
      updated="July 2026"
      sections={sections}
    />
  );
}
