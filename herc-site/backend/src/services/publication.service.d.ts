export declare const createPublication: (data: any) => Promise<{
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    year: number | null;
    authors: string | null;
    journal: string | null;
    pdfUrl: string | null;
}>;
export declare const getPublications: () => Promise<{
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    year: number | null;
    authors: string | null;
    journal: string | null;
    pdfUrl: string | null;
}[]>;
export declare const getPublicationById: (id: string) => Promise<{
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    year: number | null;
    authors: string | null;
    journal: string | null;
    pdfUrl: string | null;
} | null>;
export declare const updatePublication: (id: string, data: any) => Promise<{
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    year: number | null;
    authors: string | null;
    journal: string | null;
    pdfUrl: string | null;
}>;
export declare const deletePublication: (id: string) => Promise<{
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    year: number | null;
    authors: string | null;
    journal: string | null;
    pdfUrl: string | null;
}>;
//# sourceMappingURL=publication.service.d.ts.map