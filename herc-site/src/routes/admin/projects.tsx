import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectForm } from "@/components/admin/projects/ProjectForm";
import { ProjectTable } from "@/components/admin/projects/ProjectTable";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjectsPage,
});

function AdminProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Projects Management</h1>

      <ProjectForm
        selectedProject={selectedProject}
        onDone={() => setSelectedProject(null)}
      />

      <ProjectTable
        onEdit={(project) => setSelectedProject(project)}
      />
    </div>
  );
}