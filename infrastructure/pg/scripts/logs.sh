#!/bin/bash

echo "📜 Viewing Docker logs..."
docker-compose -p orchmind_pg logs -f
