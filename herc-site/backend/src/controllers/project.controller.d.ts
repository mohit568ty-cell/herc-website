import type { Request, Response } from "express";
export declare const getProjects: (_req: Request, res: Response) => Promise<void>;
export declare const getProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProjectBySlug: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=project.controller.d.ts.map