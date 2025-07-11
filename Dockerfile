# Use official Node.js image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy dependencies files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy your entire project
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
