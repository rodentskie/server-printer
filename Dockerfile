FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./

#for serial port
RUN apk add --no-cache make gcc g++ python linux-headers udev


RUN npm install
COPY . .
EXPOSE 3001

CMD ["npm", "start"]