/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';

// global is excluded from hot-reload
declare global {
  var prisma: PrismaClient | undefined;
}
// prevents from multiple prisma initializations in dev mode during hot-reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
