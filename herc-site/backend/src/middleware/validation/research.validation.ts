import { z } from "zod";

export const researchSchema = z.object({
  title: z
    .string()
    .min(2, "Title is required"),

  slug: z
    .string()
    .min(2, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers and hyphens"
    ),

  description: z
    .string()
    .min(5, "Description is required"),

  content: z
    .string()
    .optional(),

  imageUrl: z
    .string()
    .optional()
    .or(z.literal("")),
});