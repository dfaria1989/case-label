FROM node:latest

WORKDIR /usr/src/clean-node-api

COPY  package.json ./
COPY . .

