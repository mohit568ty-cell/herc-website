import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log("Registration attempt:", email);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("Registration rejected: user already exists:", email);

      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log("Registration successful:", email);

    const token = generateToken(user.id);

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", email);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log("Login failed: user not found:", email);

      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Login failed: invalid credentials:", email);

      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    console.log("Login successful:", email);

    const token = generateToken(user.id);

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};
