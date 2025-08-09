import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

const DATABASE_URL = process.env.DATABASE_URL || import.meta.env.VITE_DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined. Please set the DATABASE_URL environment variable.");
}

const client = postgres(DATABASE_URL);
export const db = drizzle(client, { schema });
