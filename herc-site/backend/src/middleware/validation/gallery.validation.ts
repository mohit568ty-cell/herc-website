import { z } from "zod";

export const gallerySchema = z.object({
  title: z.string().min(3),
  imageUrl: z.string().url(),
  imagePublicId: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  year: z.number().optional(),
});