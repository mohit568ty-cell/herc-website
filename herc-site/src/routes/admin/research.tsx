import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Trash2, Upload, Pencil } from "lucide-react";

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


function ResearchAdminPage() {

  const {
    data: domains = [],
    isLoading,
    error,
  } = useResearchDomains();


  const createMutation = useCreateResearchDomain();
  const deleteMutation = useDeleteResearchDomain();


  const [open, setOpen] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [preview, setPreview] = useState("");

  const [form, setForm] = useState({
  title: "",
  slug: "",
  description: "",
  content: "",
  imageUrl: "",
});


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }



  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;


    setUploading(true);


    try {

      const formData = new FormData();

      formData.append("image", file);



      const res = await fetch(
        `${API_BASE_URL}/upload/image`,
        {
          method: "POST",
          body: formData,
        }
      );


      const data = await res.json();


      if (!res.ok) {
        throw new Error(
          data.message || "Upload failed"
        );
      }



      setForm((prev) => ({
        ...prev,
        imageUrl:
          data.data?.secure_url ||
          data.secure_url ||
          "",
      }));


      setPreview(
        data.data?.secure_url ||
        data.secure_url ||
        ""
      );


    } catch (error) {

      console.error(error);
      alert("Image upload failed");

    } finally {

      setUploading(false);

    }

  }




  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    createMutation.mutate(
      form,
      {
        onSuccess: () => {

          setForm({
            title: "",
            slug: "",
            description: "",
            content: "",
            imageUrl: "",
          });


          setPreview("");

          setOpen(false);

        },
      }
    );

  }





  if (isLoading) {
    return (
      <div className="p-8">
        Loading research domains...
      </div>
    );
  }



  if (error) {

    return (
      <div className="p-8 text-red-500">
        Failed to load domains
      </div>
    );

  }





  return (

    <div className="space-y-8 p-8">


      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Research Domains
          </h1>


          <p className="text-muted-foreground">
            Manage HERC research areas
          </p>

        </div>



        <Button
          type="button"
          onClick={() => setOpen(true)}
          className="gap-2"
        >

          <Plus className="h-4 w-4" />

          Add Domain

        </Button>


      </div>





      {
        open && (

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border bg-card p-6"
          >


            <input
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
              required
            />



            <input
              name="slug"
              placeholder="Slug"
              value={form.slug}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
              required
            />



            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
              required
            />
           <textarea
               name="content"
               placeholder="Full Research Content"
               value={form.content}
               onChange={handleChange}
               className="w-full rounded-md border p-2 min-h-40"
               required
/>



            <div>

              <label className="mb-2 block text-sm font-medium">
                Upload Image
              </label>


              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />



              {
                uploading && (
                  <p className="mt-2 text-sm">
                    Uploading image...
                  </p>
                )
              }



              {
                preview && (

                  <img
                    src={preview}
                    alt="preview"
                    className="mt-4 h-40 w-40 rounded-lg object-cover"
                  />

                )
              }


            </div>





            <Button
              type="submit"
              disabled={
                createMutation.isPending ||
                uploading
              }
            >

              {
                createMutation.isPending
                ? "Adding..."
                : "Create Domain"
              }

            </Button>



          </form>

        )
      }





      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">


        {
          domains.map((domain) => (

            <div
              key={domain.id}
              className="rounded-xl border bg-card p-5"
            >


              {
                domain.imageUrl && (

                  <img
                    src={domain.imageUrl}
                    alt={domain.title}
                    className="mb-4 h-40 w-full rounded-lg object-cover"
                  />

                )
              }



              <h2 className="text-xl font-semibold">
                {domain.title}
              </h2>



              <p className="mt-2 text-sm text-muted-foreground">
                {domain.description}
              </p>




              <div className="mt-5 flex gap-2">


                <Button
                  size="sm"
                  variant="outline"
                >

                  <Pencil className="h-4 w-4" />

                </Button>



                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() =>
                    deleteMutation.mutate(domain.id)
                  }
                >

                  <Trash2 className="h-4 w-4" />

                </Button>


              </div>



            </div>

          ))
        }


      </div>




      {
        domains.length === 0 && (

          <div className="rounded-xl border p-10 text-center">

            No research domains found.

          </div>

        )
      }



    </div>

  );
}