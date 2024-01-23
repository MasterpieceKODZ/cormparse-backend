import { PrismaClient } from "@prisma/client";

const dPrismaClient = new PrismaClient();

await dPrismaClient.$connect();

export default dPrismaClient;
