import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import * as schema from "./schemas/index"

export type DrizzleClient = ReturnType<typeof drizzle>;

let client: DrizzleClient | null = null;

dotenv.config();

export function getDrizzleClient(connectionString: string): DrizzleClient {
  if (!client) {
    const pool = new Pool({
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.DB_NAME,
      ssl: true,
    });
    client = drizzle(pool, {
      schema,
    });
  }
  return client;
}
