import type { Request, Response } from "express";
import prisma from "../config/prisma.js";


export const getAdminStats = async (
  _req: Request,
  res: Response
) => {
  try {

    const [
      projects,
      publications,
      galleryImages,
      researchDomains,
      contactMessages,
    ] = await Promise.all([
      prisma.project.count(),
      prisma.publication.count(),
      prisma.galleryImage.count(),
      prisma.researchDomain.count(),
      prisma.contactMessage.count(),
    ]);


    return res.json({
      success: true,
      data: {
        projects,
        publications,
        galleryImages,
        researchDomains,
        contactMessages,
      },
    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};



export const getAdminDashboard = async (
  _req: Request,
  res: Response
) => {

  try {

    const [
      projects,
      publications,
      galleryImages,
      researchDomains,
      contactMessages,

      recentProjects,
      recentPublications,
      recentGalleryImages,
      recentResearchDomains,
      recentContacts,

    ] = await Promise.all([

      prisma.project.count(),

      prisma.publication.count(),

      prisma.galleryImage.count(),

      prisma.researchDomain.count(),

      prisma.contactMessage.count(),


      prisma.project.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      }),


      prisma.publication.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      }),


      prisma.galleryImage.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      }),


      prisma.researchDomain.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      }),


      prisma.contactMessage.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      }),

    ]);


    return res.json({

      success: true,

      data: {

        stats: {
          projects,
          publications,
          galleryImages,
          researchDomains,
          contactMessages,
        },


        recentProjects,

        recentPublications,

        recentGalleryImages,

        recentResearchDomains,

        recentContacts,

      },

    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success:false,
      message:"Dashboard Error",
    });

  }

};