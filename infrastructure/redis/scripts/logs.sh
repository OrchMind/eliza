#!/bin/bash

echo "📜 Viewing Docker logs..."
docker-compose -p orchmind_redis logs -f
