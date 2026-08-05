import cloudinary from "../config/cloudinary.js";
export const uploadToCloudinary = (fileBuffer, originalName, resourceType = "image", folder = "herc") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({
            folder,
            resource_type: resourceType,
            // Preserve original filename
            use_filename: true,
            unique_filename: true,
            filename_override: originalName,
        }, (error, result) => {
            if (error) {
                return reject(error);
            }
            if (!result) {
                return reject(new Error("Cloudinary upload failed"));
            }
            console.log("========== CLOUDINARY RESPONSE ==========");
            console.dir(result, { depth: null });
            console.log("=========================================");
            resolve(result);
        });
        stream.end(fileBuffer);
    });
};
//# sourceMappingURL=cloudinary.js.map