import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Search, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass-panel shadow-elegant"
              : "border border-transparent bg-transparent",
          )}
        >
          <div className="flex min-w-0 items-center gap-8">
            <Logo />
            <nav
              aria-label="Primary"
              className="hidden min-w-0 items-center gap-1 lg:flex"
            >
              {primaryNav.slice(0, 8).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:text-foreground"
                  activeOptions={{ exact: item.href === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/search"
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              to="/admin/login"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-card/70 px-3.5 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary md:inline-flex"
            >
              <ShieldCheck className="h-4 w-4" />
              Admin Login
            </Link>
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-forest text-primary-foreground shadow-elegant hover:bg-forest-deep md:inline-flex"
            >
              <Link to="/contact">
                Get in touch
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition-colors hover:bg-secondary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[76px] z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-4 mt-4 rounded-3xl border border-border bg-card p-4 shadow-lift"
            >
              <ul className="flex flex-col divide-y divide-border">
                {primaryNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-medium text-foreground"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * primaryNav.length }}
                >
                  <Link
                    to="/admin/login"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-base font-medium text-foreground"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                      Admin Login
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </motion.li>
              </ul>
              <div className="mt-4 rounded-2xl bg-secondary/60 p-4 text-xs text-muted-foreground">
                <p className="font-medium text-foreground">{siteConfig.fullName}</p>
                <p className="mt-0.5">{siteConfig.headquarters}</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}