import { z } from "zod";
export declare const publicationSchema: z.ZodObject<{
    title: z.ZodString;
    authors: z.ZodString;
    year: z.ZodCoercedNumber<unknown>;
    journal: z.ZodString;
    description: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    pdfUrl: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=publication.validation.d.ts.map