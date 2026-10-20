# Stage 1: Build
FROM node:18-alpine AS builder
# Set working directory
WORKDIR /workspace
# Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./
# Install sharp and other dependencies in one step
RUN npm install --legacy-peer-deps
# Copy all other files
COPY . .
# Build the Next.js app
RUN npm run build
# Stage 2: Production
FROM node:18-alpine
# Set working directory
WORKDIR /workspace
# Copy only production dependencies from the builder stage
COPY --from=builder /workspace/node_modules ./node_modules
COPY --from=builder /workspace/package.json ./
COPY --from=builder /workspace/.next ./.next
COPY --from=builder /workspace/public ./public
# Set environment to production
ENV NODE_ENV=production
# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["npm", "start"]
