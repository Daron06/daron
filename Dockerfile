FROM node as build

WORKDIR /app/

COPY . .

RUN yarn install
RUN yarn build
CMD yarn start
