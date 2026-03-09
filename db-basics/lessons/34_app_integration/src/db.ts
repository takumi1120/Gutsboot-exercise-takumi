import "dotenv/config";
import { Pool } from "pg";

export const pool = new Pool({
});

export async function initDb(): Promise<void> {
    // table作成
    await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      title TEXT NOT NULL,
      done BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}