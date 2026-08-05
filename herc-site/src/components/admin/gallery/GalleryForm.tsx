import { useState } from "react";
import { uploadImage } from "@/api/upload";
import { useCreateGalleryImage } from "@/hooks/useGallery";

export function GalleryForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Field Work");

  const createGallery = useCreateGalleryImage();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      const uploadResponse = await uploadImage(file);

      await createGallery.mutateAsync({
        title,
        description,
        category,
        imageUrl: uploadResponse.data.url,
      });

      alert("Gallery image added successfully");

      setFile(null);
      setPreview("");
      setTitle("");
      setDescription("");
      setCategory("Field Work");
    } catch (error) {
      console.error("UPLOAD ERROR:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    }
  };

  return (
    <div className="rounded-lg border p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Add Gallery Image
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border p-2"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full rounded border p-2"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full rounded border p-2"
        >
          <option value="Field Work">
            Field Work
          </option>

          <option value="Research Activities">
            Research Activities
          </option>

          <option value="Conferences">
            Conferences
          </option>

          <option value="Meetings">
            Meetings
          </option>

          <option value="Training Programmes">
            Training Programmes
          </option>

          <option value="Laboratory & Data Work">
            Laboratory & Data Work
          </option>

          <option value="Environmental Surveys">
            Environmental Surveys
          </option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-48 rounded"
          />
        )}

        <button
          type="submit"
          disabled={createGallery.isPending}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {createGallery.isPending
            ? "Uploading..."
            : "Upload Image"}
        </button>
      </form>
    </div>
  );
}