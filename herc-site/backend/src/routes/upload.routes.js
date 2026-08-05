import { Router } from "express";
import { uploadImage, uploadPDF, deleteFile, } from "../controllers/upload.controller.js";
import { imageUpload, pdfUpload, } from "../middleware/upload.middleware.js";
const router = Router();
router.post("/image", imageUpload.single("image"), uploadImage);
router.post("/pdf", pdfUpload.single("pdf"), uploadPDF);
router.delete("/", deleteFile);
export default router;
//# sourceMappingURL=upload.routes.js.map