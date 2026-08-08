import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import { useCreateProject } from "@/hooks/useCreateProject";
import { useUpdateProject } from "@/hooks/useUpdateProject";
import { api } from "@/lib/api";

interface Project {
  id: string;
  title?: string;
  slug?: string;
  description?: string;
  status?: string;
  imageUrl?: string;
}

interface ProjectFormProps {
  selectedProject?: Project;
  onDone?: () => void;
}

interface ProjectFormData {
  title: string;
  slug: string;
  description: string;
  status: string;
  imageUrl: string;
}

interface UploadResponse {
  url: string;
}

const initialForm: ProjectFormData = {
  title: "",
  slug: "",
  description: "",
  status: "Completed",
  imageUrl: "",
};

export function ProjectForm({
  selectedProject,
  onDone,
}: ProjectFormProps) {
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState<ProjectFormData>(initialForm);

  const isSaving =
    createProject.isPending || updateProject.isPending;

  useEffect(() => {
    if (selectedProject) {
      const imageUrl = selectedProject.imageUrl || "";

      setForm({
        title: selectedProject.title || "",
        slug: selectedProject.slug || "",
        description: selectedProject.description || "",
        status: selectedProject.status || "Completed",
        imageUrl,
      });

      setPreviewUrl(imageUrl);
    } else {
      setForm(initialForm);
      setPreviewUrl("");
    }

    setImageFile(null);
    setError("");
  }, [selectedProject]);

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleChange(
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleImageChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0] ?? null;

    setError("");

    if (!file) {
      setImageFile(null);
      setPreviewUrl(form.imageUrl);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be less than 10 MB.");
      e.target.value = "";
      return;
    }

    setImageFile(file);

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  }

  async function uploadImage(): Promise<string> {
    if (!imageFile) {
      return form.imageUrl;
    }

    const data = new FormData();
    data.append("image", imageFile);

    const response = await api<UploadResponse>(
      "/upload/image",
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.url) {
      throw new Error("Image upload failed. No image URL returned.");
    }

    return response.url;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSaving) {
      return;
    }

    try {
      setError("");

      if (!form.title.trim()) {
        setError("Project title is required.");
        return;
      }

      if (!form.slug.trim()) {
        setError("Project slug is required.");
        return;
      }

      if (!form.description.trim()) {
        setError("Project description is required.");
        return;
      }

      const uploadedImageUrl = await uploadImage();

      const projectData = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        description: form.description.trim(),
        status: form.status,
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
              setImageFile(null);
              onDone?.();
            },
            onError: (mutationError) => {
              setError(
                mutationError instanceof Error
                  ? mutationError.message
                  : "Failed to update project."
              );
            },
          }
        );
      } else {
        createProject.mutate(projectData, {
          onSuccess: () => {
            setForm(initialForm);
            setImageFile(null);
            setPreviewUrl("");
            onDone?.();
          },
          onError: (mutationError) => {
            setError(
              mutationError instanceof Error
                ? mutationError.message
                : "Failed to create project."
            );
          },
        });
      }
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Image upload failed."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <h2 className="text-xl font-semibold">
          {selectedProject ? "Edit Project" : "Add Project"}
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {selectedProject
            ? "Update project details and replace the project image."
            : "Add a new HERC research project or field activity."}
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label
          htmlFor="project-title"
          className="mb-2 block text-sm font-medium"
        >
          Project Title
        </label>

        <input
          id="project-title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project title"
          disabled={isSaving}
          className="w-full rounded-lg border p-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      {/* Slug */}
      <div>
        <label
          htmlFor="project-slug"
          className="mb-2 block text-sm font-medium"
        >
          Slug
        </label>

        <input
          id="project-slug"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          placeholder="project-slug"
          disabled={isSaving}
          className="w-full rounded-lg border p-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="project-description"
          className="mb-2 block text-sm font-medium"
        >
          Description
        </label>

        <textarea
          id="project-description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Project description"
          rows={5}
          disabled={isSaving}
          className="w-full resize-none rounded-lg border p-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      {/* Image */}
      <div>
        <label
          htmlFor="project-image"
          className="mb-2 block text-sm font-medium"
        >
          Project Image
        </label>

        <input
          id="project-image"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleImageChange}
          disabled={isSaving}
          className="w-full cursor-pointer rounded-lg border p-2 text-sm disabled:cursor-not-allowed disabled:opacity-60"
        />

        <p className="mt-1 text-xs text-muted-foreground">
          JPG, PNG or WebP • Maximum 10 MB
        </p>

        {previewUrl && (
          <div className="mt-4 overflow-hidden rounded-xl border bg-muted">
            <img
              src={previewUrl}
              alt="Project preview"
              className="h-48 w-full object-cover"
            />
          </div>
        )}

        {imageFile && (
          <p className="mt-2 text-xs text-green-700">
            New image selected: {imageFile.name}
          </p>
        )}
      </div>

      {/* Status */}
      <div>
        <label
          htmlFor="project-status"
          className="mb-2 block text-sm font-medium"
        >
          Status
        </label>

        <select
          id="project-status"
          name="status"
          value={form.status}
          onChange={handleChange}
          disabled={isSaving}
          className="w-full rounded-lg border p-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="Completed">Completed</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSaving}
        className="w-full rounded-lg bg-green-700 px-4 py-3 font-medium text-white transition hover:bg-green-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSaving
          ? "Uploading & Saving..."
          : selectedProject
            ? "Update Project"
            : "Save Project"}
      </button>
    </form>
  );
}
