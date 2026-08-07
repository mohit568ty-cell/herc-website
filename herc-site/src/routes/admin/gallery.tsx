import { createFileRoute } from "@tanstack/react-router";

import { GalleryForm } from "@/components/admin/gallery/GalleryForm";
import { GalleryTable } from "@/components/admin/gallery/GalleryTable";

export const Route = createFileRoute("/admin/gallery")({
  component: AdminGalleryPage,
});

function AdminGalleryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Gallery Management
        </h1>

        <p className="text-muted-foreground">
          Manage gallery images for the HERC website.
        </p>
      </div>

      <section className="rounded-xl border bg-card p-6">
        <GalleryForm />
      </section>

      <section className="rounded-xl border bg-card p-6">
        <GalleryTable />
      </section>
    </div>
  );
}