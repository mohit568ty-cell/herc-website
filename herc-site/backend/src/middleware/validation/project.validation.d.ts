import { z } from "zod";
export declare const projectSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodString;
    imageUrl: z.ZodString;
    imagePublicId: z.ZodString;
    status: z.ZodEnum<{
        Completed: "Completed";
        Ongoing: "Ongoing";
        Upcoming: "Upcoming";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=project.validation.d.ts.map