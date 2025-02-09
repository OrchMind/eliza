#!/bin/bash

echo "🔄 Restarting Docker containers..."
docker-compose -p orchmind_redis restart
if [ $? -eq 0 ]; then
    echo "✅ Docker containers restarted successfully!"
else
    echo "❌ Failed to restart Docker containers!"
    exit 1
fi
