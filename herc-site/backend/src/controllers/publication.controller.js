import prisma from "../config/prisma.js";
// Get all publications
export const getPublications = async (_req, res) => {
    try {
        const publications = await prisma.publication.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.json({
            success: true,
            count: publications.length,
            data: publications,
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
// Get publication by ID
export const getPublication = async (req, res) => {
    try {
        const publication = await prisma.publication.findUnique({
            where: {
                id: String(req.params.id),
            },
        });
        if (!publication) {
            return res.status(404).json({
                success: false,
                message: "Publication not found",
            });
        }
        return res.json({
            success: true,
            data: publication,
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
// Create publication
export const createPublication = async (req, res) => {
    try {
        console.log("Publication Body:", req.body);
        const { title, authors, year, journal, description, pdfUrl, } = req.body;
        const publication = await prisma.publication.create({
            data: {
                title,
                authors,
                year,
                journal,
                description,
                pdfUrl,
            },
        });
        return res.status(201).json({
            success: true,
            data: publication,
        });
    }
    catch (error) {
        console.error("Publication Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
};
export const updatePublication = async (req, res) => {
    try {
        const { title, authors, year, journal, description, pdfUrl, } = req.body;
        const publication = await prisma.publication.update({
            where: {
                id: String(req.params.id),
            },
            data: {
                title,
                authors,
                year,
                journal,
                description,
                pdfUrl,
            },
        });
        return res.json({
            success: true,
            data: publication,
        });
    }
    catch (error) {
        console.error("Update Publication Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// Delete publication
export const deletePublication = async (req, res) => {
    try {
        await prisma.publication.delete({
            where: {
                id: String(req.params.id),
            },
        });
        return res.json({
            success: true,
            message: "Publication deleted successfully",
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
//# sourceMappingURL=publication.controller.js.map