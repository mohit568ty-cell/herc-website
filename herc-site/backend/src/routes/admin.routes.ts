import { Router } from "express";

import { login } from "../controllers/auth.controller.js";

import { validate } from "../middleware/validation/validate.js";
import { loginSchema } from "../middleware/validation/auth.validation.js";

const router = Router();

router.post("/login", validate(loginSchema), login);

export default router;
