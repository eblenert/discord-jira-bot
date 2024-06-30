FROM node:bookworm

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "./bin/www"]

EXPOSE 3000