import { z } from "zod";
export declare const gallerySchema: z.ZodObject<{
    title: z.ZodString;
    imageUrl: z.ZodString;
    imagePublicId: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=gallery.validation.d.ts.map