import { Router } from "express";

import {
  createGalleryImage,
  getGalleryImages,
  getGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} from "../controllers/gallery.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation/validate.js";
import { gallerySchema } from "../middleware/validation/gallery.validation.js";

const router = Router();

// Public routes
router.get("/", getGalleryImages);

router.get("/:id", getGalleryImage);

// Protected routes
router.post(
  "/",
  authenticate,
  validate(gallerySchema),
  createGalleryImage
);

router.put(
  "/:id",
  authenticate,
  validate(gallerySchema),
  updateGalleryImage
);

router.delete(
  "/:id",
  authenticate,
  deleteGalleryImage
);

export default router;