# Stage 1: Build the VitePress application
# Use a Node.js image to install dependencies and build the static site.
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
# Switch to domestic mirrors for faster installation in China
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN npm config set registry https://registry.npmmirror.com/

# Install git, which is required by VitePress to get last updated timestamps
RUN apk add --no-cache git
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the static site. The output will be in 'docs/.vitepress/dist'
RUN npm run docs:build

# Stage 2: Serve the application with Nginx
# Use a lightweight Nginx image for the final production server.
FROM nginx:alpine

# Copy the built static files from the build stage to the Nginx public directory
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

# Expose port 80, the default HTTP port Nginx listens on
EXPOSE 80

# Start Nginx in the foreground when the container launches
CMD ["nginx", "-g", "daemon off;"]