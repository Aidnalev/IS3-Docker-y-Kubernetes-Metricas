# Usamos imagen oficial Node 18
FROM node:18

WORKDIR /usr/src/app

COPY server/package*.json ./

RUN npm install

COPY server/ .

EXPOSE 5000

CMD ["npm", "run", "dev"]
