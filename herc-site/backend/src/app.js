import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import limiter from "./middleware/rateLimit.js";
import { errorHandler } from "./middleware/error.middleware.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import authRoutes from "./routes/auth.routes.js";
import publicationRoutes from "./routes/publication.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import researchDomainRoutes from "./routes/researchDomain.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
const app = express();
// Security
app.use(helmet());
// Logging
app.use(morgan("dev"));
// CORS
app.use(cors());
// Rate Limiting
app.use(limiter);
// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/research-domains", researchDomainRoutes);
// Health Check
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "HERC Backend API is running 🚀",
    });
});
// Global Error Handler (Always Last)
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map