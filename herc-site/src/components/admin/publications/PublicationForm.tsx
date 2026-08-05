import { useState } from "react";
import { api } from "@/lib/api";
import { useCreatePublication } from "@/hooks/usePublications";
import { toast } from "sonner";
export function PublicationForm() {
  const createPublication = useCreatePublication();

  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [year, setYear] = useState("");
  const [journal, setJournal] = useState("");
  const [description, setDescription] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  async function handlePdfUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const res = await api<{
        success: boolean;
        data: {
          secure_url: string;
          url: string;
          public_id: string;
        };
      }>("/upload/pdf", {
        method: "POST",
        body: formData,
      });

      setPdfUrl(res.data.secure_url);
      toast.success("PDF uploaded successfully.");
    } catch (err) {
      console.error(err);
      toast.error("PDF upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await createPublication.mutateAsync({
        title,
        authors,
        year: Number(year),
        journal,
        description,
        pdfUrl,
      });

      toast.success("Publication created successfully.");

      setTitle("");
      setAuthors("");
      setYear("");
      setJournal("");
      setDescription("");
      setPdfUrl("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create publication.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border p-6"
    >
      <h2 className="text-xl font-semibold">
        Add Publication
      </h2>

      <input
        className="w-full rounded border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Authors"
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
      />

      <input
        type="number"
        className="w-full rounded border p-2"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Journal"
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
      />

      <textarea
        className="w-full rounded border p-2"
        rows={4}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        accept=".pdf"
        onChange={handlePdfUpload}
      />

      {pdfUrl && (
        <p className="text-sm text-green-600">
          PDF uploaded successfully.
        </p>
      )}

      <button
        type="submit"
        disabled={
          uploading || createPublication.isPending
        }
        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading
          ? "Uploading..."
          : createPublication.isPending
          ? "Saving..."
          : "Create Publication"}
      </button>
    </form>
  );
}