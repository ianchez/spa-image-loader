FROM node:lts-iron

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your app
RUN npm run build

# Install `serve` to run your application
RUN npm install -g serve

# Command to run your app using `serve`
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose a port
EXPOSE 3000
