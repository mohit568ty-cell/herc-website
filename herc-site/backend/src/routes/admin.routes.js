import { Router } from "express";
import { getAdminStats, getAdminDashboard } from "../controllers/admin.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
const router = Router();
router.get("/stats", authenticate, getAdminStats);
router.get("/dashboard", authenticate, getAdminDashboard);
export default router;
//# sourceMappingURL=admin.routes.js.map