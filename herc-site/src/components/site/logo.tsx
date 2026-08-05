import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/lib/site-config";
import { BrandMark } from "./brand-mark";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label={`${siteConfig.fullName} — home`}
    >
      <BrandMark
        size="sm"
        priority
        className="transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Est. {siteConfig.founded}
          </span>
        </span>
      )}
    </Link>
  );
}