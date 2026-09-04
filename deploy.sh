#!/bin/bash
set -e

echo "=== Deploying hilliard-portfolio ==="

# Install dependencies
npm ci

# Optional database migration if DATABASE_URL is present
if [ -n "$DATABASE_URL" ]; then
  echo "Running database migrations..."
  node scripts/migrate.js || echo "Database migration warning: proceeding with build."
fi

# Build Astro application
echo "Building Astro SSR application..."
npm run build

echo "=== Build Complete. Starting server on port 4321 ==="
node dist/server/entry.mjs
