import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open contact panel"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-forest-deep text-primary-foreground shadow-lift transition-colors hover:bg-forest sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-glow/40" aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label="Contact HERC"
              className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-md flex-col overflow-y-auto bg-card shadow-lift sm:rounded-l-3xl"
            >
              <header className="flex items-start justify-between gap-4 border-b border-border p-6 sm:p-7">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-glow">
                    Get in touch
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-foreground">
                    Talk with HERC
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Consultation, collaboration, media — we usually reply within two business days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-secondary text-forest-deep transition-colors hover:bg-forest hover:text-primary-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </header>

              <div className="grid grid-cols-3 gap-3 p-6 sm:p-7">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/50 p-4 transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-elegant"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-card text-forest">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    Phone
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/50 p-4 transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-elegant"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-card text-forest">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/50 p-4 transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-elegant"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-card text-forest">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </span>
                </a>
              </div>

              <form
                className="flex flex-1 flex-col gap-4 px-6 pb-8 sm:px-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Request a consultation
                </p>
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-forest"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-forest"
                />
                <input
                  type="text"
                  placeholder="Organisation (optional)"
                  className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-forest"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project — scope, region, timeline."
                  className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest-deep text-sm font-medium text-primary-foreground transition-colors hover:bg-forest"
                >
                  Send request <Send className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-muted-foreground">
                  By submitting you agree to be contacted about your enquiry. We don't share your data.
                </p>
              </form>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}