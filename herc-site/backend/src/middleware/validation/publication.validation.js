import { z } from "zod";
export const publicationSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Title must be at least 3 characters"),
    authors: z
        .string()
        .trim()
        .min(2, "Authors field is required"),
    year: z.coerce
        .number()
        .int("Year must be a whole number")
        .min(1900, "Invalid year")
        .max(new Date().getFullYear() + 1, "Invalid year"),
    journal: z
        .string()
        .trim()
        .min(2, "Journal name is required"),
    description: z
        .string()
        .trim()
        .optional()
        .or(z.literal("")),
    pdfUrl: z
        .string()
        .url("Invalid PDF URL"),
});
//# sourceMappingURL=publication.validation.js.map