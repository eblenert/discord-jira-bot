FROM node:bookworm

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["node", "./dist/index.js"]

EXPOSE 3000