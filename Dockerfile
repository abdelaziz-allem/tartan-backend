FROM node:20

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (including Prisma schema)
COPY . .

# Run Prisma generate to generate the Prisma Client
RUN npx prisma generate

# Build the NestJS app
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "run", "start:prod"]
