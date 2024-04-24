# Step 1: Stop and remove Docker containers using docker-compose down
Write-Host "Stopping and removing Docker containers..."
docker-compose down

# Step 2: Delete all Docker images
Write-Host "Deleting all Docker images..."
docker rmi $(docker images -q) -f

# Step 3: Start Docker containers using docker-compose up
Write-Host "Starting Docker containers..."
docker-compose up