import { toast } from "sonner";

import {
  usePublications,
  useDeletePublication,
} from "@/hooks/usePublications";

export function PublicationTable() {
  const { data, isLoading } = usePublications();
  const deleteMutation = useDeletePublication();

  const handleDelete = (id: string, title: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    deleteMutation.mutate(id, {
      onSuccess: () => {
        toast.success("Publication deleted successfully.");
      },
      onError: () => {
        toast.error("Failed to delete publication.");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="rounded-xl border p-6 text-center">
        Loading publications...
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-xl border p-6 text-center text-muted-foreground">
        No publications found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="border-b bg-muted">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Authors</th>
            <th className="p-4 text-left">Year</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((publication) => (
            <tr
              key={publication.id}
              className="border-b hover:bg-muted/50"
            >
              <td className="p-4 font-medium">
                {publication.title}
              </td>

              <td className="p-4">
                {publication.authors}
              </td>

              <td className="p-4">
                {publication.year}
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    handleDelete(
                      publication.id,
                      publication.title
                    )
                  }
                  disabled={deleteMutation.isPending}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {deleteMutation.isPending
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}