import { Router } from "express";
import { getProjects, getProject, getProjectBySlug, createProject, updateProject, deleteProject, } from "../controllers/project.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation/validate.js";
import { projectSchema } from "../middleware/validation/project.validation.js";
const router = Router();
// Public Routes
router.get("/", getProjects);
router.get("/slug/:slug", getProjectBySlug);
router.get("/:id", getProject);
// Protected Routes
router.post("/", authenticate, validate(projectSchema), createProject);
router.put("/:id", authenticate, validate(projectSchema), updateProject);
router.delete("/:id", authenticate, deleteProject);
export default router;
//# sourceMappingURL=project.routes.js.map