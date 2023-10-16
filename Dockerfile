FROM node:16-alpine3.18 as angular
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:alpine3.18
COPY --from=angular /app/dist /usr/local/apache2/htdocs/
