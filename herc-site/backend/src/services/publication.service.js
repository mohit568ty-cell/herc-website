import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createPublication = async (data) => {
    return await prisma.publication.create({
        data,
    });
};
export const getPublications = async () => {
    return await prisma.publication.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};
export const getPublicationById = async (id) => {
    return await prisma.publication.findUnique({
        where: {
            id,
        },
    });
};
export const updatePublication = async (id, data) => {
    return await prisma.publication.update({
        where: {
            id,
        },
        data,
    });
};
export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {
            id,
        },
    });
};
//# sourceMappingURL=publication.service.js.map