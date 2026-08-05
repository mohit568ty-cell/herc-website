import { Router } from "express";
import { createPublication, getPublications, getPublication, updatePublication, deletePublication, } from "../controllers/publication.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation/validate.js";
import { publicationSchema } from "../middleware/validation/publication.validation.js";
const router = Router();
// ===============================
// PUBLIC ROUTES
// ===============================
router.get("/", getPublications);
router.get("/:id", getPublication);
// ===============================
// PROTECTED ROUTES
// ===============================
router.post("/", authenticate, validate(publicationSchema), createPublication);
router.put("/:id", authenticate, validate(publicationSchema), updatePublication);
router.delete("/:id", authenticate, deletePublication);
export default router;
//# sourceMappingURL=publication.routes.js.map