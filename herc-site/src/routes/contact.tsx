import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { z } from "zod";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { BrandMark } from "@/components/site/brand-mark";
import { api } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HERC" },
      {
        name: "description",
        content:
          "Contact the Himalayan Environmental Research Centre for research collaborations, consultancy enquiries and project discussions.",
      },
      { property: "og:title", content: "Contact — HERC" },
      {
        property: "og:description",
        content:
          "Contact HERC for research collaborations, consultancy enquiries and project discussions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const easing = [0.22, 1, 0.36, 1] as const;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  organisation: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

type FormState = z.infer<typeof contactSchema>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  subject: "",
  message: "",
};

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Environmental research, biodiversity and ecological surveys, EIA support, watershed and Himalayan ecosystem studies, GIS support and technical documentation.",
  },
  {
    q: "Who do you typically work with?",
    a: "Government departments, research institutions, universities, NGOs, CSR foundations and industries operating in the Indian Himalayan region.",
  },
  {
    q: "How do enquiries usually progress?",
    a: "An initial discussion is followed by scope definition, a written proposal, and a phased delivery plan aligned with the client's timeline.",
  },
  {
    q: "Do you support long-term monitoring programmes?",
    a: "Yes. Protocol-driven, repeatable monitoring is a core part of our field practice.",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10">
          <Hero />
        </section>

        <FormAndInfo />
        <MapAndHours />
        <Faqs />
        <FinalCta />
      </main>

      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
      >
        <MessageSquare className="h-3.5 w-3.5" />
        Contact
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
        Start a conversation with the office.
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
        Reach out for research collaborations, consultancy enquiries,
        project discussions or media requests. Every enquiry is reviewed
        personally.
      </motion.p>
    </div>
  );
}

function FormAndInfo() {
  const [values, setValues] = useState<FormState>(initial);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const next: Partial<Record<keyof FormState, string>> = {};

      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;

        if (!next[key]) {
          next[key] = issue.message;
        }
      }

      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setStatus("submitting");

    try {
      await api("/contact", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          subject: values.subject,
          message: values.message,
        }),
      });

      setStatus("success");
      setValues(initial);
    } catch (error) {
      setStatus("error");

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry."
      );
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easing }}
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10"
        >
          <h2 className="font-display text-2xl font-medium sm:text-3xl">
            Send an enquiry
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Share a few details and we will get back to you.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              required
              error={errors.name}
            >
              <Input
                id="name"
                value={values.name}
                onChange={(e) =>
                  setField("name", e.target.value)
                }
                autoComplete="name"
                maxLength={100}
              />
            </Field>

            <Field
              id="email"
              label="Email"
              required
              error={errors.email}
            >
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) =>
                  setField("email", e.target.value)
                }
                autoComplete="email"
                maxLength={255}
              />
            </Field>

            <Field
              id="phone"
              label="Phone"
              error={errors.phone}
            >
              <Input
                id="phone"
                type="tel"
                value={values.phone ?? ""}
                onChange={(e) =>
                  setField("phone", e.target.value)
                }
                autoComplete="tel"
                maxLength={30}
              />
            </Field>

            <Field
              id="organisation"
              label="Organisation"
              error={errors.organisation}
            >
              <Input
                id="organisation"
                value={values.organisation ?? ""}
                onChange={(e) =>
                  setField("organisation", e.target.value)
                }
                autoComplete="organization"
                maxLength={150}
              />
            </Field>

            <div className="sm:col-span-2">
              <Field
                id="subject"
                label="Subject"
                required
                error={errors.subject}
              >
                <Input
                  id="subject"
                  value={values.subject}
                  onChange={(e) =>
                    setField("subject", e.target.value)
                  }
                  maxLength={150}
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field
                id="message"
                label="Message"
                required
                error={errors.message}
              >
                <Textarea
                  id="message"
                  rows={6}
                  value={values.message}
                  onChange={(e) =>
                    setField("message", e.target.value)
                  }
                  maxLength={1500}
                />
              </Field>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              By submitting you agree to our{" "}
              <a
                href="/privacy"
                className="text-forest underline-offset-2 hover:underline"
              >
                privacy policy
              </a>
              .
            </p>

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="rounded-full bg-forest text-primary-foreground hover:bg-forest-deep"
            >
              {status === "submitting"
                ? "Sending…"
                : "Send enquiry"}

              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {status === "success" && (
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-emerald-glow/40 bg-emerald-glow/10 px-5 py-4">
              <BrandMark size="md" />

              <div>
                <p className="font-display text-base font-medium text-forest-deep">
                  Thank you — your enquiry has been received.
                </p>

                <p className="mt-1 text-sm text-forest-deep/80">
                  The HERC office will respond shortly.
                </p>
              </div>
            </div>
          )}

          {status === "error" && submitError && (
            <p
              role="alert"
              className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-destructive"
            >
              {submitError}
            </p>
          )}
        </motion.form>

        <div className="space-y-4">
          <InfoCard
            icon={MapPin}
            label="Office Address"
            value={siteConfig.headquarters}
          />

          <InfoCard
            icon={Mail}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />

          <InfoCard
            icon={Phone}
            label="Phone"
            value={siteConfig.phone}
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
          />

          <InfoCard
            icon={Clock}
            label="Working Hours"
            value={siteConfig.workingHours}
          />
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
        {required && (
          <span className="ml-1 text-destructive">*</span>
        )}
      </label>

      {children}

      {error && (
        <p className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-3xl border border-border bg-card p-5 transition-colors hover:bg-secondary/40">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary">
          <Icon className="h-5 w-5 text-forest" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {label}
          </p>

          <p className="mt-2 break-words text-sm leading-relaxed text-foreground">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function MapAndHours() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-elegant sm:p-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(600px 300px at 30% 40%, oklch(0.62 0.14 160 / 0.15), transparent 60%), radial-gradient(600px 300px at 70% 60%, oklch(0.42 0.045 245 / 0.15), transparent 60%)",
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-forest" />

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Office
            </p>
          </div>

          <h2 className="mt-5 max-w-2xl font-display text-2xl font-medium sm:text-3xl">
            {siteConfig.headquarters}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Interactive map will be embedded here.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-forest" />
            FAQs
          </div>

          <h2 className="mt-5 font-display text-3xl font-medium sm:text-4xl">
            Common questions.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A few answers to questions we often receive before the
            first conversation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-card px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <span>{faq.q}</span>

                <span className="text-xl text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easing }}
        className="rounded-[2rem] bg-gradient-forest px-8 py-14 text-primary-foreground shadow-lift sm:px-14 sm:py-20"
      >
        <div className="flex max-w-3xl flex-col gap-5">
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
            <Sparkles className="h-4 w-4" />
            Discuss your project
          </div>

          <h2 className="font-display text-3xl font-medium sm:text-5xl">
            Let&apos;s discuss your environmental project.
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            Share your requirements and we will respond with a
            considered proposal and timeline.
          </p>
        </div>
      </motion.div>
    </section>
  );
}