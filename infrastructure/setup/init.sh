#!/bin/bash

GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
RED="\033[31m"
RESET="\033[0m"

NETWORK_NAME="orchmind-network"

printf "${BLUE}🔄 Checking if network '%s' exists...${RESET}\n" "$NETWORK_NAME"
if docker network ls | grep -q "$NETWORK_NAME"; then
    printf "${YELLOW}⚠️  Network '%s' already exists.${RESET}\n" "$NETWORK_NAME"
else
    printf "${GREEN}🚀 Creating Docker network '%s'...${RESET}\n" "$NETWORK_NAME"
    if docker network create "$NETWORK_NAME"; then
        printf "${GREEN}✅ Network '%s' created successfully!${RESET}\n" "$NETWORK_NAME"
    else
        printf "${RED}❌ Failed to create network '%s'.${RESET}\n" "$NETWORK_NAME"
        exit 1
    fi
fi

printf "${BLUE}📡 Network details:${RESET}\n"
docker network inspect "$NETWORK_NAME" | jq '.[0] | {Name, Driver, Scope, Containers}'

printf "${GREEN}🎉 Done!${RESET}\n"
