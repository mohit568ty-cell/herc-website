import { Router } from "express";

import {
  submitContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/contact.controller.js";

import { validate } from "../middleware/validation/validate.js";
import { contactSchema } from "../middleware/validation/contact.validation.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

// Public Contact Form
router.post(
  "/",
  validate(contactSchema),
  submitContact
);

// Admin Routes
router.get(
  "/",
  authenticate,
  getContacts
);

router.get(
  "/:id",
  authenticate,
  getContactById
);

router.delete(
  "/:id",
  authenticate,
  deleteContact
);

export default router;