type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ErrorEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ErrorReportOptions,
  ) => void;
};

declare global {
  interface Window {
    // Optional hook: wire up any error-monitoring provider (e.g. Sentry) here
    // by assigning `window.__errorEvents = { captureException: ... }` during
    // app bootstrap. Left undefined by default — reporting is a no-op until
    // a provider is connected.
    __errorEvents?: ErrorEvents;
  }
}

/**
 * Reports an unexpected runtime/render error. Currently logs to the console
 * and forwards to `window.__errorEvents` if a monitoring provider has been
 * configured; otherwise it's a safe no-op.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error(error);
  window.__errorEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
