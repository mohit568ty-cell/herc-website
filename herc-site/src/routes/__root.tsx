import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import hercLogo from "../assets/herc-logo.png";
import ogImage from "../assets/og-image.jpg";
import heroImage from "../assets/hero-himalaya.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="glass-panel max-w-lg rounded-3xl p-8 text-center">
        <p className="font-display text-6xl font-semibold text-primary">
          404
        </p>

        <h1 className="mt-4 font-display text-3xl font-semibold">
          Page not found
        </h1>

        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="glass-panel max-w-lg rounded-3xl p-8 text-center">
        <h1 className="font-display text-3xl font-semibold">
          This page didn't load
        </h1>

        <p className="mt-3 text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background/60 px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "HERC — Himalayan Environmental Research Centre",
        },
        {
          name: "description",
          content:
            "Himalayan Environmental Research Centre (HERC) — a premier institute for ecological research, conservation science, and environmental consultancy across the Indian Himalayan region.",
        },
        {
          name: "author",
          content: "Himalayan Environmental Research Centre",
        },
        {
          property: "og:title",
          content: "HERC — Himalayan Environmental Research Centre",
        },
        {
          property: "og:description",
          content:
            "Himalayan Environmental Research Centre (HERC) — a premier institute for ecological research, conservation science, and environmental consultancy across the Indian Himalayan region.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "HERC",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "theme-color",
          content: "#1f3d2b",
        },
        {
          name: "twitter:title",
          content: "HERC — Himalayan Environmental Research Centre",
        },
        {
          name: "twitter:description",
          content:
            "Himalayan Environmental Research Centre (HERC) — a premier institute for ecological research, conservation science, and environmental consultancy across the Indian Himalayan region.",
        },
        {
          property: "og:image",
          content: ogImage,
        },
        {
          name: "twitter:image",
          content: ogImage,
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "apple-touch-icon",
          href: hercLogo,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />

      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={3000}
      />
    </QueryClientProvider>
  );
}

function RootLayout() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <div className="relative min-h-dvh overflow-hidden">
      {!isAdminRoute && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.96 0.025 100 / 0.72) 0%, oklch(0.97 0.018 120 / 0.78) 50%, oklch(0.94 0.025 150 / 0.82) 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background:
                "radial-gradient(700px 500px at 15% 20%, oklch(0.65 0.10 155 / 0.12), transparent 70%), radial-gradient(700px 500px at 85% 75%, oklch(0.65 0.07 220 / 0.10), transparent 70%)",
            }}
          />
        </>
      )}

      <main id="main" className="relative z-0">
        <Outlet />
      </main>

      {!isAdminRoute && <SiteFooter />}

      {!isAdminRoute && <FloatingContact />}
    </div>
  );
}