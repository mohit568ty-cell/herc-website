-- AlterTable
ALTER TABLE "GalleryImage" ALTER COLUMN "category" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "imagePublicId" TEXT;
