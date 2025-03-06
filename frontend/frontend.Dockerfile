# Use Node.js image
FROM node:18-alpine 

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./package.json ./package-lock.json ./
RUN npm install 

RUN npm install axios

# Copy all frontend files
COPY . .

# Build the React app
RUN npm run build 

# Use a lightweight web server to serve React (optional)
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
