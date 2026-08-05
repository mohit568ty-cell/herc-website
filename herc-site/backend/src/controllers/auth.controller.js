import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
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
        const token = generateToken(user.id);
        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server Error",
        });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Email received:", email);
        const user = await prisma.user.findUnique({
            where: { email },
        });
        console.log("User found:", user);
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }
        const token = generateToken(user.id);
        return res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server Error",
        });
    }
};
//# sourceMappingURL=auth.controller.js.map