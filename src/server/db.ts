import pg from 'pg';

const { Pool } = pg;

const connectionString = import.meta.env.DATABASE_URL || process.env.DATABASE_URL;

let pool: pg.Pool | null = null;

if (connectionString) {
  try {
    pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    });
  } catch (err) {
    console.warn('Postgres connection pool failed to initialize:', err);
  }
} else {
  console.info('DATABASE_URL not set — running with in-memory safe fallback for local development.');
}

export const query = async (text: string, params?: any[]) => {
  if (!pool) {
    console.info('[Mock DB Query]', text, params);
    return { rows: [], rowCount: 0 };
  }
  return pool.query(text, params);
};

export const getClient = async () => {
  if (!pool) {
    throw new Error('Database pool not configured.');
  }
  return pool.connect();
};

export const isDbConnected = (): boolean => {
  return pool !== null;
};
