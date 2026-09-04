# Multi-stage Dockerfile for Coolify deployment of hilliard-portfolio
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files and build
COPY . .
RUN npm run build

# Production runtime stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy build artifacts and server entry from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/db ./db
COPY --from=builder /app/scripts ./scripts

EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]
