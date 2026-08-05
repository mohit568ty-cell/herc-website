import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
async function main() {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: "admin@herc.com",
        },
    });
    if (existingUser) {
        await prisma.user.delete({
            where: {
                email: "admin@herc.com",
            },
        });
    }
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const user = await prisma.user.create({
        data: {
            email: "admin@herc.com",
            password: hashedPassword,
            role: "admin",
        },
    });
    console.log("Admin created successfully:");
    console.log(user);
}
main()
    .catch(console.error)
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-admin.js.map