FROM node:slim

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "./bin/www"]

EXPOSE 3000