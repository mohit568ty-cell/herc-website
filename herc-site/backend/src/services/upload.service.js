import cloudinary from "../config/cloudinary.js";
export const uploadImage = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: "herc",
            resource_type: "image",
        }, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result.secure_url);
            }
        });
        uploadStream.end(fileBuffer);
    });
};
//# sourceMappingURL=upload.service.js.map