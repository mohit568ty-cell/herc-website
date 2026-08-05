import type { Request, Response } from "express";
/**
 * Public
 * POST /api/contact
 */
export declare const submitContact: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Admin
 * GET /api/contact
 */
export declare const getContacts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Admin
 * GET /api/contact/:id
 */
export declare const getContactById: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Admin
 * DELETE /api/contact/:id
 */
export declare const deleteContact: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=contact.controller.d.ts.map