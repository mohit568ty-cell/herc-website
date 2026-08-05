import { createFileRoute } from "@tanstack/react-router";

import { PublicationForm } from "@/components/admin/publications/PublicationForm";
import { PublicationTable } from "@/components/admin/publications/PublicationTable";

export const Route = createFileRoute("/admin/publications")({
  component: AdminPublicationsPage,
});

function AdminPublicationsPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">
          Publications Management
        </h1>

        <p className="text-muted-foreground">
          Manage publications for the HERC website.
        </p>
      </div>

      <PublicationForm />

      <PublicationTable />
    </div>
  );
}