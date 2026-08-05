export const validate = (schema) => {
    return (req, res, next) => {
        try {
            const result = schema.safeParse(req.body);
            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    message: "Validation failed",
                    errors: result.error.flatten(),
                });
            }
            req.body = result.data;
            next();
        }
        catch (error) {
            console.error("Validation Error:", error);
            return res.status(500).json({
                success: false,
                message: "Validation middleware error",
            });
        }
    };
};
//# sourceMappingURL=validate.js.map