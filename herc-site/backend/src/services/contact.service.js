import prisma from "../config/prisma.js";
export async function createContactMessage(data) {
    return prisma.contactMessage.create({
        data,
    });
}
export async function getAllContactMessages() {
    return prisma.contactMessage.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}
export async function getContactMessageById(id) {
    return prisma.contactMessage.findUnique({
        where: {
            id,
        },
    });
}
export async function deleteContactMessage(id) {
    return prisma.contactMessage.delete({
        where: {
            id,
        },
    });
}
//# sourceMappingURL=contact.service.js.map