import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (
  fileBuffer: Buffer
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "herc",
        resource_type: "image",
      },
      (error: any, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(result!.secure_url);
        }
      }
    );

    uploadStream.end(fileBuffer);
  });
};