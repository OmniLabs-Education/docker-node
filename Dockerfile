FROM node:alpine

WORKDIR /usr/docker-app

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm","run","dev"] 