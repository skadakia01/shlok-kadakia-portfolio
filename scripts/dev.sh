#!/bin/bash

# Development script for building and running the portfolio in Docker

# Set variables
CONTAINER_NAME="portfolio-dev"
IMAGE_NAME="portfolio:dev"

# Check if container is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Container is already running. Stopping..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Build the development image
echo "Building development image..."
docker build -t $IMAGE_NAME --target build .

# Run the container in development mode
echo "Starting development container..."
docker run --name $CONTAINER_NAME \
    -p 3000:3000 \
    -v "$(pwd)/src:/app/src" \
    -v "$(pwd)/public:/app/public" \
    --rm \
    $IMAGE_NAME \
    npm run dev

echo "Development server stopped"