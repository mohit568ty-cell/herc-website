import { useEffect, useState } from "react";
import { useCreateProject } from "@/hooks/useCreateProject";
import { useUpdateProject } from "@/hooks/useUpdateProject";
import { Project, projects } from "@/lib/projects-data";
interface ProjectFormProps {
  selectedProject?: any;
  onDone?: () => void;
}

export function ProjectForm({
  selectedProject,
  onDone,
}: ProjectFormProps) {
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    status: "Completed",
    imageUrl: "",
  });

  useEffect(() => {
    if (selectedProject) {
      setForm({
        title: selectedProject.title || "",
        slug: selectedProject.slug || "",
        description: selectedProject.description || "",
        status: selectedProject.status || "Completed",
        imageUrl: selectedProject.imageUrl || "",
      });
    } else {
      setForm({
        title: "",
        slug: "",
        description: "",
        status: "Completed",
        imageUrl: "",
      });
    }
  }, [selectedProject]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (selectedProject) {
      updateProject.mutate(
        {
          id: selectedProject.id,
          data: form,
        },
        {
          onSuccess: () => {
            onDone?.();
          },
        }
      );
    } else {
      createProject.mutate(form, {
        onSuccess: () => {
          setForm({
            title: "",
            slug: "",
            description: "",
            status: "Completed",
            imageUrl: "",
          });
        },
      });
    }
  }

  function onEdit(projects: Project[]) {
    throw new Error("Function not implemented.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded border p-6"
    >
      <h2 className="text-xl font-semibold">
        {selectedProject ? "Edit Project" : "Add Project"}
      </h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Project title"
        className="w-full rounded border p-2"
      />

      <input
        name="slug"
        value={form.slug}
        onChange={handleChange}
        placeholder="project-slug"
        className="w-full rounded border p-2"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full rounded border p-2"
      />

      <input
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full rounded border p-2"
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full rounded border p-2"
      >
        <option value="Completed">Completed</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Upcoming">Upcoming</option>
      </select>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
          disabled={
            createProject.isPending || updateProject.isPending
          }
        >
          {createProject.isPending || updateProject.isPending
            ? "Saving..."
            : selectedProject
            ? "Update Project"
            : "Save Project"}
        </button>
<button
  onClick={() => {
    console.log(projects);
    onEdit(projects);
  }}
  className="rounded border px-3 py-1"
>
  Edit
</button>
        {selectedProject && (
          <button
            type="button"
            onClick={onDone}
            className="rounded border px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}