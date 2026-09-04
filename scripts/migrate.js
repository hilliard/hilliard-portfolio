import pg from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.log('No DATABASE_URL found. Skipping migration.');
  process.exit(0);
}

const client = new pg.Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database.');

    const sqlPath = path.join(process.cwd(), 'db/migrations/01-schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Applying migration 01-schema.sql...');
    await client.query(sql);
    console.log('Migration applied successfully.');
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
