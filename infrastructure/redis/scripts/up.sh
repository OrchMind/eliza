#!/bin/bash

echo "🚀 Starting Docker containers..."
docker-compose -p orchmind_redis up -d
if [ $? -eq 0 ]; then
    echo "✅ Docker containers started successfully!"
else
    echo "❌ Failed to start Docker containers!"
    exit 1
fi
