import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube } from "lucide-react";
import { legalNav, siteConfig } from "@/lib/site-config";
import { BrandLockup } from "./brand-mark";
import { researchAreas } from "@/lib/projects-data";

const quickLinks = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#08140f] text-primary-foreground">
    <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0"
>
  {/* Base Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#10271d] via-[#0b1c16] to-[#08140f]" />

  {/* Top Left Glow */}
  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

  {/* Bottom Right Glow */}
  <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/3 blur-3xl" />

  {/* Divider */}
  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
</div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <BrandLockup />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
  Scientific research, ecological assessment and field-based
  environmental consultancy supporting biodiversity and
  conservation initiatives across the Indian Himalaya.
</p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
                { icon: Youtube, href: siteConfig.socials.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur transition-colors hover:bg-primary-foreground/15"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((it) => (
                <li key={it.href}>
                  <Link
                    to={it.href}
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Research Areas
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {researchAreas.map((area) => (
                <li key={area} className="text-primary-foreground/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div>
  <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
    Legal
  </h3>

  <ul className="mt-5 space-y-3 text-sm">
    {legalNav.map((it) => (
      <li key={it.href}>
        <Link
          to={it.href}
          className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
        >
          {it.label}
        </Link>
      </li>
    ))}
  </ul>
</div>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Contact with HERC
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.headquarters}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="font-medium tracking-wide text-primary-foreground/70">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
