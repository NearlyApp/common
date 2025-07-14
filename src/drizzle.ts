import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schemas/index';

export type DrizzleClient = ReturnType<typeof drizzle>;

let pool: Pool | null = null;
let client: DrizzleClient | null = null;

dotenv.config();

export function getDrizzlePool(): Pool {
  if (!pool) {
    pool = new Pool({
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.DB_NAME,
      ssl: true,
    });
  }
  return pool;
}

export function getDrizzleClient(): DrizzleClient {
  if (!client) {
    client = drizzle(getDrizzlePool(), {
      schema,
    });
  }
  return client;
}
