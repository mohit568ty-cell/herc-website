import { z } from "zod";
export declare const researchSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, z.core.$strip>;
//# sourceMappingURL=research.validation.d.ts.map