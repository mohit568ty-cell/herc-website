import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3).max(200),

  slug: z
    .string()
    .min(3)
    .max(200)
    .regex(/^[a-z0-9-]+$/),

  description: z.string().min(10),

  imageUrl: z.string().url(),

  imagePublicId: z.string().min(1),

  status: z.enum([
    "Ongoing",
    "Completed",
    "Upcoming",
  ]),
});