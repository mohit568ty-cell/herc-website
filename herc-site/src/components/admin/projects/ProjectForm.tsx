import { useEffect, useState } from "react";
import { useCreateProject } from "@/hooks/useCreateProject";
import { useUpdateProject } from "@/hooks/useUpdateProject";
import { api } from "@/lib/api";

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

  const [imageFile, setImageFile] = useState<File | null>(null);

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

    setImageFile(null);
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

  async function uploadImage() {
    if (!imageFile) return form.imageUrl;

    const data = new FormData();
    data.append("image", imageFile);

    const response = await api<{ url: string }>("/upload/image", {
      method: "POST",
      body: data,
    });

    return response.url;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const uploadedImageUrl = await uploadImage();

    const projectData = {
      ...form,
      imageUrl: uploadedImageUrl,
    };

    if (selectedProject) {
      updateProject.mutate(
        {
          id: selectedProject.id,
          data: projectData,
        },
        {
          onSuccess: () => {
            onDone?.();
          },
        }
      );
    } else {
      createProject.mutate(projectData, {
        onSuccess: () => {
          setForm({
            title: "",
            slug: "",
            description: "",
            status: "Completed",
            imageUrl: "",
          });

          setImageFile(null);
        },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label className="mb-2 block text-sm font-medium">
          Project Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImageFile(e.target.files?.[0] || null)
          }
          className="w-full rounded border p-2"
        />

        {form.imageUrl && (
          <img
            src={form.imageUrl}
            alt="Project preview"
            className="mt-3 h-32 rounded object-cover"
          />
        )}
      </div>

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

      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-white"
        disabled={
          createProject.isPending ||
          updateProject.isPending
        }
      >
        {createProject.isPending ||
        updateProject.isPending
          ? "Saving..."
          : selectedProject
          ? "Update Project"
          : "Save Project"}
      </button>
    </form>
  );
}