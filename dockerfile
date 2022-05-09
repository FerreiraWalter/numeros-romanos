FROM node:16

WORKDIR /usr/app

COPY packege*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
