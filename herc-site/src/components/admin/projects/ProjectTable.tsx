import { useState } from "react";
import { useProjects } from "@/hooks/useProject";
import { useDeleteProject } from "@/hooks/useDeleteProject";

interface ProjectTableProps {
  onEdit: (project: any) => void;
}

export function ProjectTable({
  onEdit,
}: ProjectTableProps) {
  const { data: projects = [], isLoading } = useProjects();
  const deleteProject = useDeleteProject();

  const [search, setSearch] = useState("");

  if (isLoading) {
    return (
      <div className="p-6">
        Loading projects...
      </div>
    );
  }

  const filteredProjects = projects.filter((project: any) =>
    project.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Projects
        </h1>

        <button
          className="rounded bg-black px-4 py-2 text-white"
        >
          + Add Project
        </button>

      </div>

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects..."
        className="w-full rounded border px-3 py-2"
      />

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead>
            <tr className="border-b bg-gray-100">

              <th className="p-3 text-left">
                Image
              </th>

              <th className="p-3 text-left">
                Title
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredProjects.length === 0 ? (

              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center"
                >
                  No projects found
                </td>
              </tr>

            ) : (

              filteredProjects.map((project: any) => (

                <tr
                  key={project.id}
                  className="border-b"
                >

                  <td className="p-3">

                    {project.imageUrl ? (

                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-12 w-12 rounded object-cover"
                      />

                    ) : (

                      <div className="h-12 w-12 rounded bg-gray-200" />

                    )}

                  </td>

                  <td className="p-3">
                    {project.title}
                  </td>

                  <td className="p-3">
                    {project.status}
                  </td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={() => onEdit(project)}
                      className="rounded border px-3 py-1"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteProject.mutate(project.id)
                      }
                      className="rounded bg-red-600 px-3 py-1 text-white"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}