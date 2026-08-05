import prisma from "../config/prisma.js";
// Get all gallery images
export const getGalleryImages = async (_req, res) => {
    try {
        const images = await prisma.galleryImage.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.json({
            success: true,
            count: images.length,
            data: images,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
// Get gallery image by ID
export const getGalleryImage = async (req, res) => {
    try {
        const image = await prisma.galleryImage.findUnique({
            where: {
                id: String(req.params.id),
            },
        });
        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found",
            });
        }
        return res.json({
            success: true,
            data: image,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
// Create gallery image
export const createGalleryImage = async (req, res) => {
    try {
        const { title, imageUrl, category, description, location, year, } = req.body;
        const image = await prisma.galleryImage.create({
            data: {
                title,
                imageUrl,
                category,
                description,
                location,
                year,
            },
        });
        return res.status(201).json({
            success: true,
            data: image,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
// Update gallery image
export const updateGalleryImage = async (req, res) => {
    try {
        const image = await prisma.galleryImage.update({
            where: {
                id: String(req.params.id),
            },
            data: req.body,
        });
        return res.json({
            success: true,
            data: image,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
// Delete gallery image
export const deleteGalleryImage = async (req, res) => {
    try {
        await prisma.galleryImage.delete({
            where: {
                id: String(req.params.id),
            },
        });
        return res.json({
            success: true,
            message: "Gallery image deleted successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
//# sourceMappingURL=gallery.controller.js.map