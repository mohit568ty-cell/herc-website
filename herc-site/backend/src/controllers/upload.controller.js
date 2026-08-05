import cloudinary from "../config/cloudinary.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: "No image file provided",
            });
            return;
        }
        const result = await uploadToCloudinary(req.file.buffer, req.file.originalname, "image", "herc/images");
        res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            data: result,
        });
    }
    catch (error) {
        console.error("Cloudinary Image Error:", error);
        res.status(500).json({
            success: false,
            message: "Image upload failed",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
export const uploadPDF = async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: "No PDF file provided",
            });
            return;
        }
        console.log("Original Name:", req.file.originalname);
        console.log("Mime Type:", req.file.mimetype);
        console.log("File Size:", req.file.size);
        console.log("First Bytes:", req.file.buffer.subarray(0, 10));
        const result = await uploadToCloudinary(req.file.buffer, req.file.originalname, "raw", "herc/pdfs");
        console.log("PDF Upload Result:", result);
        res.status(201).json({
            success: true,
            message: "PDF uploaded successfully",
            data: result,
        });
    }
    catch (error) {
        console.error("Cloudinary PDF Error:", error);
        res.status(500).json({
            success: false,
            message: "PDF upload failed",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
export const deleteFile = async (req, res) => {
    try {
        const { publicId } = req.body;
        if (!publicId) {
            res.status(400).json({
                success: false,
                message: "Public ID is required",
            });
            return;
        }
        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: "raw",
        });
        if (result.result !== "ok") {
            res.status(404).json({
                success: false,
                message: "File not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "File deleted successfully",
        });
    }
    catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete file",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
//# sourceMappingURL=upload.controller.js.map