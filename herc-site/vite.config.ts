import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Standalone Vite configuration for the HERC website.
//
// This is a plain, explicit TanStack Start + Vite setup with no dependency
// on any third-party hosted-editor tooling, so the project builds and
// deploys independently anywhere Node (or your platform of choice) runs.
// It configures:
//   - vite-tsconfig-paths: resolves the "@/*" -> "./src/*" alias from tsconfig.json
//   - @tailwindcss/vite: Tailwind CSS v4 processing
//   - @tanstack/react-start (tanstackStart): file-based routing + SSR server build
//   - @vitejs/plugin-react: React Fast Refresh / JSX transform
//
// A few things intentionally not included, since they belong to a specific
// hosted editor's sandbox rather than to the app itself:
//   - Any dev-server/sandbox bridge, HMR gate, or iframe port-detection
//     plugins — these only make sense inside a hosted live-preview editor.
//   - The bundled TanStack Devtools panel — optional tooling, not required
//     for the site to run. Add `@tanstack/react-devtools` back in dev-only
//     if you'd like the panel.
//   - A hard-coded Cloudflare Workers deployment target — `tanstackStart()`
//     below uses its default Node server build so the app can be deployed
//     anywhere (Node, Docker, etc). Pass `target: "cloudflare-module"` (or
//     your platform's target) here if you deploy to Cloudflare, Vercel, etc.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts
      // (our SSR error wrapper).
      server: { entry: "src/server.ts" },
    }),
    viteReact(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
