# Description: Dockerfile for building the image
FROM node:22.14.0

# Create app directory
WORKDIR /myapp

# Copy 
COPY . .

# Install app dependencies
RUN npm install

# Expose the port
EXPOSE 5173

# Run the app
CMD ["npm", "run", "dev"]
