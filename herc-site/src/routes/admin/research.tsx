import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, memo } from "react";
import { Plus, Trash2, Upload, Pencil } from "lucide-react";
import type { ResearchDomain } from "@/types/research-domain";
import { Button } from "@/components/ui/button";
import { useResearchDomains } from "@/hooks/useResearchDomains";
import {
  useCreateResearchDomain,
  useDeleteResearchDomain,
} from "@/hooks/useResearchDomainMutations";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const Route = createFileRoute("/admin/research")({
  component: ResearchAdminPage,
});



interface ResearchDomainForm {
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
}

interface ImageUploadResponse {
  message?: string;
  data?: {
    secure_url?: string;
  };
  secure_url?: string;
}

const EMPTY_FORM: ResearchDomainForm = {
  title: "",
  slug: "",
  description: "",
  content: "",
  imageUrl: "",
};

function DomainCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border bg-card p-5">
      <div className="mb-4 h-40 w-full rounded-lg bg-muted" />
      <div className="h-5 w-2/3 rounded bg-muted" />
      <div className="mt-3 h-4 w-full rounded bg-muted" />
      <div className="mt-2 h-4 w-4/5 rounded bg-muted" />
      <div className="mt-5 flex gap-2">
        <div className="h-8 w-8 rounded bg-muted" />
        <div className="h-8 w-8 rounded bg-muted" />
      </div>
    </div>
  );
}

function DomainsGridSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <DomainCardSkeleton key={i} />
      ))}
    </div>
  );
}

interface DomainCardProps {
  domain: ResearchDomain;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

const DomainCard = memo(function DomainCard({
  domain,
  onDelete,
  isDeleting,
}: DomainCardProps) {
  return (
    <div className="group rounded-xl border bg-card p-5 transition-shadow duration-200 hover:shadow-md">
      {domain.imageUrl && (
        <img
          src={domain.imageUrl}
          alt={domain.title}
          loading="lazy"
          decoding="async"
          className="mb-4 h-40 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      )}

      <h2 className="text-xl font-semibold">{domain.title}</h2>

      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
        {domain.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" type="button">
          <Pencil className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant="destructive"
          type="button"
          disabled={isDeleting}
          onClick={() => onDelete(domain.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});

function ResearchAdminPage() {
  const { data: domains = [], isLoading, error } = useResearchDomains();

  const createMutation = useCreateResearchDomain();
  const deleteMutation = useDeleteResearchDomain();

  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState("");

  const [form, setForm] = useState<ResearchDomainForm>(EMPTY_FORM);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (!file) return;

      setUploading(true);

      try {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(`${API_BASE_URL}/upload/image`, {
          method: "POST",
          body: formData,
        });

        const data: ImageUploadResponse = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Upload failed");
        }

        const uploadedUrl = data.data?.secure_url || data.secure_url || "";

        setForm((prev) => ({
          ...prev,
          imageUrl: uploadedUrl,
        }));

        setPreview(uploadedUrl);
      } catch (err) {
        console.error(err);
        alert("Image upload failed");
      } finally {
        setUploading(false);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      createMutation.mutate(form, {
        onSuccess: () => {
          setForm(EMPTY_FORM);
          setPreview("");
          setOpen(false);
        },
      });
    },
    [createMutation, form]
  );

  const handleDelete = useCallback(
    (id: string) => {
      deleteMutation.mutate(id);
    },
    [deleteMutation]
  );

  const toggleOpen = useCallback(() => setOpen(true), []);

  if (error) {
    return (
      <div className="p-8 text-red-500">Failed to load domains</div>
    );
  }

  return (
    <div className="space-y-8 p-4 sm:p-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            Research Domains
          </h1>

          <p className="text-muted-foreground">Manage HERC research areas</p>
        </div>

        <Button
          type="button"
          onClick={toggleOpen}
          className="w-full gap-2 sm:w-auto"
        >
          <Plus className="h-4 w-4" />
          Add Domain
        </Button>
      </div>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="animate-in fade-in slide-in-from-top-2 space-y-4 rounded-xl border bg-card p-4 duration-200 sm:p-6"
        >
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-md border p-2 transition-colors focus:border-primary focus:outline-none"
            required
          />

          <input
            name="slug"
            placeholder="Slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full rounded-md border p-2 transition-colors focus:border-primary focus:outline-none"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-md border p-2 transition-colors focus:border-primary focus:outline-none"
            required
          />

          <textarea
            name="content"
            placeholder="Full Research Content"
            value={form.content}
            onChange={handleChange}
            className="min-h-40 w-full rounded-md border p-2 transition-colors focus:border-primary focus:outline-none"
            required
          />

          <div>
            <label className="mb-2 block text-sm font-medium">
              Upload Image
            </label>

            <label className="flex w-fit cursor-pointer items-center gap-2 rounded-md border border-dashed px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Upload className="h-4 w-4" />
              Choose file
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {uploading && (
              <p className="mt-2 text-sm text-muted-foreground">
                Uploading image...
              </p>
            )}

            {preview && (
              <img
                src={preview}
                alt="preview"
                loading="lazy"
                decoding="async"
                className="mt-4 h-40 w-40 rounded-lg object-cover"
              />
            )}
          </div>

          <Button
            type="submit"
            disabled={createMutation.isPending || uploading}
            className="w-full sm:w-auto"
          >
            {createMutation.isPending ? "Adding..." : "Create Domain"}
          </Button>
        </form>
      )}

      {isLoading ? (
        <DomainsGridSkeleton />
      ) : (
        <>
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  {domains.map((domain) => (
    <DomainCard
      key={domain.id}
      domain={domain}
      onDelete={handleDelete}
      isDeleting={
        deleteMutation.isPending &&
        deleteMutation.variables === domain.id
      }
    />
  ))}
</div>

          {domains.length === 0 && (
            <div className="rounded-xl border p-10 text-center text-muted-foreground">
              No research domains found.
            </div>
          )}
        </>
      )}
    </div>
  );
}