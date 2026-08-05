interface CreateContactInput {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
}
export declare function createContactMessage(data: CreateContactInput): Promise<{
    message: string;
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
}>;
export declare function getAllContactMessages(): Promise<{
    message: string;
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
}[]>;
export declare function getContactMessageById(id: string): Promise<{
    message: string;
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
} | null>;
export declare function deleteContactMessage(id: string): Promise<{
    message: string;
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
}>;
export {};
//# sourceMappingURL=contact.service.d.ts.map