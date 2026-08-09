import { Router } from "express";

import {
  uploadImage,
  uploadPDF,
  deleteFile,
} from "../controllers/upload.controller.js";

import {
  imageUpload,
  pdfUpload,
} from "../middleware/upload.middleware.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

// Protected image upload
router.post(
  "/image",
  authenticate,
  imageUpload.single("image"),
  uploadImage
);

// Protected PDF upload
router.post(
  "/pdf",
  authenticate,
  pdfUpload.single("pdf"),
  uploadPDF
);

// Protected file deletion
router.delete(
  "/",
  authenticate,
  deleteFile
);

export default router;
