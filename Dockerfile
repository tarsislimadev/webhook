FROM node:22-alpine

WORKDIR /app

COPY . .

CMD npm start
