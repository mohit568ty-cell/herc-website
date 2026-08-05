import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getProject = async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: String(req.params.id),
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const {
      title,
      slug,
      description,
      imageUrl,
       imagePublicId,
      status,
    } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        imageUrl,
         imagePublicId,
        status,
      },
    });

    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const {
      title,
      slug,
      description,
      imageUrl,
       imagePublicId,
      status,
    } = req.body;

    const project = await prisma.project.update({
      where: {
        id: String(req.params.id),
      },
      data: {
        title,
        slug,
        description,
        imageUrl,
        imagePublicId,
        status,
      },
    });

    return res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    await prisma.project.delete({
      where: {
        id: String(req.params.id),
      },
    });

    return res.json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ADD THIS AFTER DELETE FUNCTION CLOSES

export const getProjectBySlug = async (
  req: Request,
  res: Response
) => {
  try {
    const { slug } = req.params;

    const project = await prisma.project.findUnique({
      where: {
        slug: String(slug),
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.json({
      success: true,
      data: project,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};