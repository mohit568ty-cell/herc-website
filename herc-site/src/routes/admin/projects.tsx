import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ProjectForm } from "@/components/admin/projects/ProjectForm";
import { ProjectTable } from "@/components/admin/projects/ProjectTable";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjectsPage,
});

function AdminProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Projects Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage HERC research projects and field activities.
        </p>
      </div>

      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <ProjectForm
          selectedProject={selectedProject}
          onDone={() => setSelectedProject(null)}
        />
      </section>

      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <ProjectTable
          onEdit={(project) => setSelectedProject(project)}
        />
      </section>
    </div>
  );
}