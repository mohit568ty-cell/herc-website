import { api } from "@/lib/api";

export async function uploadImage(file: File) {
  const formData = new FormData();

  formData.append("image", file);

  const response = await api<{
    success: boolean;
    message: string;
    data: {
      url: string;
    };
  }>("/upload/image", {
    method: "POST",
    body: formData,
  });

  return response;
}