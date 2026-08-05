import prisma  from "../config/prisma.js";

interface CreateContactInput {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function createContactMessage(
  data: CreateContactInput
) {
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

export async function getContactMessageById(id: string) {
  return prisma.contactMessage.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteContactMessage(id: string) {
  return prisma.contactMessage.delete({
    where: {
      id,
    },
  });
}