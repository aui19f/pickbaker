import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma;
// ||
// new PrismaClient({
//   log: ["query"], // 터미널에 실제 실행되는 SQL을 보여줘서 공부하기 좋습니다.
// });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
