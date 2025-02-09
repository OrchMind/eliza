#!/bin/bash

echo "🛑 Stopping and removing Docker containers (with orphans)..."
docker-compose -p orchmind_pg down --remove-orphans
if [ $? -eq 0 ]; then
    echo "✅ Docker containers stopped and removed successfully!"
else
    echo "❌ Failed to stop and remove Docker containers!"
    exit 1
fi
