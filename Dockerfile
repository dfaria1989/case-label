FROM node:latest

WORKDIR /app

COPY  package.json ./
COPY  seeder.js ./
COPY  nodemon.json ./
COPY  ./seeds ./
COPY . .

