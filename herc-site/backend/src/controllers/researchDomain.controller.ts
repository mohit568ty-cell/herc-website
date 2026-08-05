import type { Request, Response } from "express";
import prisma from "../config/prisma.js";


// Get all research domains
export const getResearchDomains = async (
  _req: Request,
  res: Response
) => {
  try {
    const domains = await prisma.researchDomain.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      success: true,
      count: domains.length,
      data: domains,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



// Get research domain by ID OR slug
// Get research domain by ID OR slug
export const getResearchDomain = async (
  req: Request,
  res: Response
) => {
  try {

    const param = String(req.params.id);


    const domain = await prisma.researchDomain.findFirst({
      where: {
        OR: [
          {
            id: param,
          },
          {
            slug: param,
          },
        ],
      },
    });


    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Research domain not found",
      });
    }


    return res.json({
      success: true,
      data: domain,
    });


  } catch (error) {

    console.error(error);


    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};



// Create research domain
export const createResearchDomain = async (
  req: Request,
  res: Response
) => {
  console.log("BODY RECEIVED:", req.body);

  try {
    const {
      title,
      slug,
      description,
      content,
      imageUrl,
    } = req.body;


    const domain = await prisma.researchDomain.create({
      data: {
        title,
        slug,
        description,
        content,
        imageUrl,
      },
    });


    return res.status(201).json({
      success: true,
      data: domain,
    });


  } catch (error: any) {

    console.error(error);


    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Slug already exists. Please use another slug.",
      });
    }


    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



// Update research domain
export const updateResearchDomain = async (
  req: Request,
  res: Response
) => {

  try {

    const domain =
      await prisma.researchDomain.update({

        where: {
          id: String(req.params.id),
        },

        data: req.body,

      });



    return res.json({
      success: true,
      data: domain,
    });



  } catch (error) {

    console.error(error);


    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};







// Delete research domain
export const deleteResearchDomain = async (
  req: Request,
  res: Response
) => {

  try {

    await prisma.researchDomain.delete({

      where: {
        id: String(req.params.id),
      },

    });



    return res.json({

      success: true,

      message:
        "Research domain deleted successfully",

    });



  } catch (error) {

    console.error(error);


    return res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};