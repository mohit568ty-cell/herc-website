import { Router } from "express";

import {
  getProjects,
  getProject,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

import { validate } from "../middleware/validation/validate.js";
import { projectSchema } from "../middleware/validation/project.validation.js";

const router = Router();

// ─────────────────────────────────────────────
// Public Routes
// ─────────────────────────────────────────────

router.get("/", getProjects);

router.get("/slug/:slug", getProjectBySlug);

router.get("/:id", getProject);

// ─────────────────────────────────────────────
// Protected Routes
// ─────────────────────────────────────────────

// Create project
router.post(
  "/",
  authenticate,
  validate(projectSchema),
  createProject
);

// Update project
// PUT support
router.put(
  "/:id",
  authenticate,
  validate(projectSchema),
  updateProject
);

// PATCH support
router.patch(
  "/:id",
  authenticate,
  validate(projectSchema.partial()),
  updateProject
);
// Delete project
router.delete(
  "/:id",
  authenticate,
  deleteProject
);

export default router;
