import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/research")({
  component: ResearchRoute,
});

function ResearchRoute() {
  return <Outlet />;
}