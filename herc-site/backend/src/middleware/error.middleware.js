export const errorHandler = (err, _req, res, _next) => {
    console.error(err);
    return res.status(err.statusCode || err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};
//# sourceMappingURL=error.middleware.js.map