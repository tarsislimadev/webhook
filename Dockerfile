FROM node:25.1-alpine

WORKDIR /app

COPY . .

CMD node index.js
