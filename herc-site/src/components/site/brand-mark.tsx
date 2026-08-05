import { cn } from "@/lib/utils";
import hercLogo from "@/assets/herc-logo.png";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, string> = {
  xs: "h-6 w-6",
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-20 w-20",
  xl: "h-28 w-28",
};

/**
 * Reusable HERC brand mark. Renders the official circular seal as a crisp,
 * responsive image. Never stretched — always displayed at 1:1 with subtle
 * ring to lift it off dark and light surfaces.
 */
export function BrandMark({
  size = "sm",
  className,
  ringed = true,
  priority = false,
  alt = "HERC — Himalayan Environmental Research & Consultancy",
}: {
  size?: Size;
  className?: string;
  ringed?: boolean;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-full bg-white",
        ringed && "ring-1 ring-black/10 shadow-elegant",
        sizeMap[size],
        className,
      )}
    >
      <img
        src={hercLogo}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover"
        draggable={false}
      />
    </span>
  );
}

/**
 * Compact horizontal lockup: seal + wordmark. Used only in the footer where
 * the full brand identity needs to be established.
 */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <BrandMark size="md" ringed={false} className="shadow-lift" />
      <div className="flex flex-col leading-tight">
        <span className="font-display text-lg font-semibold tracking-tight">
          Himalayan Environmental Research &amp; Consultancy (HERC)
        </span>
        <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-foreground/70">
          Science • Sustainability • Conservation
        </span>
      </div>
    </div>
  );
}