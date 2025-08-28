# Multi-stage build for optimized production image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files for all projects
COPY client/package*.json ./client/
COPY client-mobile/package*.json ./client-mobile/
COPY server/package*.json ./server/

# Install dependencies for all projects (with dev dependencies for build)
RUN cd client && npm ci
RUN cd client-mobile && npm ci
RUN cd server && npm ci --only=production

# Copy source code
COPY client/ ./client/
COPY client-mobile/ ./client-mobile/
COPY server/ ./server/

# Build both frontend projects
RUN cd client && npm run build
RUN cd client-mobile && npm run build

# Production stage
FROM node:20-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app directory and user
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built applications and dependencies
COPY --from=builder --chown=nextjs:nodejs /app/server ./server
COPY --from=builder --chown=nextjs:nodejs /app/client/dist ./client/dist
COPY --from=builder --chown=nextjs:nodejs /app/client-mobile/dist ./client-mobile/dist

# Switch to non-