#!/bin/bash

# Production deployment script for the portfolio

# Set variables
CONTAINER_NAME="portfolio-prod"
IMAGE_NAME="ghcr.io/skadakia01/shlok-kadakia-portfolio"
VERSION=${1:-latest}  # Use provided version or 'latest' if none provided

# Check if the container is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Container is already running. Stopping..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Pull the latest image
echo "Pulling image $IMAGE_NAME:$VERSION..."
docker pull $IMAGE_NAME:$VERSION

# Run the container
echo "Starting production container..."
docker run --name $CONTAINER_NAME \
    -p 80:80 \
    -d \
    --restart unless-stopped \
    $IMAGE_NAME:$VERSION

echo "Production deployment complete. Site available at http://localhost"