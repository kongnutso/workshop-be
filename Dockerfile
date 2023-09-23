FROM node:18-alpine

WORKDIR /usr/src/app
ENV APP_HOME=/usr/src/app/

COPY package.json yarn.lock $APP_HOME
RUN yarn install
COPY . $APP_HOME
RUN yarn build
CMD ["yarn", "run", "start"]

EXPOSE 3000