#!/bin/bash

echo "🔨 Building Docker containers..."
docker-compose -p orchmind_redis build
if [ $? -eq 0 ]; then
    echo "✅ Docker containers built successfully!"
else
    echo "❌ Docker build failed!"
    exit 1
fi
