# Usamos imagen oficial Node 18
FROM node:18

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm install

# Actualiza la base de datos de browserslist para evitar warnings
RUN npx update-browserslist-db@latest --update-db

COPY app/ .

EXPOSE 3000

CMD ["npm", "start"]
