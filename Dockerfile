FROM node:latest

WORKDIR /usr/src/ts-node-api

COPY  package.json ./
COPY  seeder.js ./
COPY  ./seeds ./

COPY . .