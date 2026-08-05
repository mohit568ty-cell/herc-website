import jwt from "jsonwebtoken";
export const authenticate = (req, res, next) => {
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
        const secret = process.env.JWT_SECRET || "supersecretkey";
        console.log("========== JWT DEBUG ==========");
        console.log("Authorization:", authHeader);
        console.log("Token:", token);
        console.log("Secret:", secret);
        const decoded = jwt.verify(token, secret);
        console.log("Decoded:", decoded);
        console.log("===============================");
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        console.error("JWT ERROR:", error);
        return res.status(401).json({
            message: "Invalid or expired token.",
        });
    }
};
//# sourceMappingURL=auth.middleware.js.map