export interface GalleryImage {
  id: string;
  title?: string | null;
  imageUrl: string;
  category?: string | null;
  description?: string | null;
  location?: string | null;
  year?: number | null;
  createdAt: string;
}

export interface GalleryApiResponse {
  success: boolean;
  count?: number;
  data: GalleryImage[];
}