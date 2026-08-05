import { Router } from "express";
import { createResearchDomain, getResearchDomains, getResearchDomain, updateResearchDomain, deleteResearchDomain, } from "../controllers/researchDomain.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation/validate.js";
import { researchSchema } from "../middleware/validation/research.validation.js";
const router = Router();
// ===============================
// PUBLIC ROUTES
// ===============================
router.get("/", getResearchDomains);
router.get("/:id", getResearchDomain);
// ===============================
// PROTECTED ROUTES
// ===============================
router.post("/", authenticate, validate(researchSchema), createResearchDomain);
router.put("/:id", authenticate, validate(researchSchema), updateResearchDomain);
router.delete("/:id", authenticate, deleteResearchDomain);
export default router;
//# sourceMappingURL=researchDomain.routes.js.map