/*
  Warnings:

  - Made the column `category` on table `GalleryImage` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "GalleryImage" ADD COLUMN     "description" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "year" INTEGER,
ALTER COLUMN "category" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'admin';
