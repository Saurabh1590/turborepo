import { PrismaClient } from "../../generated/prisma/client";

const prismaClientSingleton = () => {
  // Pass the empty object here to fix the TS error
  //@ts-ignore
  return new PrismaClient({});
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// Export the types so your app can use them
export * from "../../generated/prisma/client";