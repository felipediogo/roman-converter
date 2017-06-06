FROM node:6.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g yarn

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn

COPY . /usr/src/app

CMD npm test
