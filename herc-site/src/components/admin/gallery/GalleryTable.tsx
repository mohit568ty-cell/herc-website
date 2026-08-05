import { useGallery, useDeleteGalleryImage } from "@/hooks/useGallery";

export function GalleryTable() {
  const { data, isLoading } = useGallery();
  const deleteMutation = useDeleteGalleryImage();

  if (isLoading) {
    return <p>Loading gallery...</p>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-xl border p-6 text-center text-muted-foreground">
        No gallery images found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="border-b bg-muted">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((image) => (
            <tr
              key={image.id}
              className="border-b hover:bg-muted/50"
            >
              <td className="p-4">
                <img
                  src={image.imageUrl}
                  alt={image.title ?? "Gallery Image"}
                  className="h-16 w-16 rounded-lg object-cover"
                />
              </td>

              <td className="p-4 font-medium">
                {image.title ?? "Untitled"}
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    deleteMutation.mutate(image.id)
                  }
                  className="
                    rounded-lg
                    bg-red-600
                    px-4
                    py-2
                    text-white
                    hover:bg-red-700
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}