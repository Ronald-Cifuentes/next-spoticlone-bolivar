# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

COPY example.env .env

# Expose port 3000
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["npm", "start"]
