import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import prisma from "../config/prisma.js";

interface JwtPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access denied. No token provided.",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Invalid token format.",
      });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET environment variable is required");
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;

    if (!decoded.userId) {
      return res.status(401).json({
        message: "Invalid token.",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
      select: {
        id: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "User no longer exists.",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin privileges required.",
      });
    }

    req.userId = user.id;
    req.userRole = user.role;

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};
