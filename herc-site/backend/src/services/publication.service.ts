import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPublication = async (data: any) => {
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


export const getPublicationById = async (id: string) => {
  return await prisma.publication.findUnique({
    where: {
      id,
    },
  });
};


export const updatePublication = async (
  id: string,
  data: any
) => {
  return await prisma.publication.update({
    where: {
      id,
    },
    data,
  });
};


export const deletePublication = async (id: string) => {
  return await prisma.publication.delete({
    where: {
      id,
    },
  });
};