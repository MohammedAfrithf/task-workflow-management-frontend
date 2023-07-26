# Build 
FROM node:14-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# Host 
FROM nginx:1.21-alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ /var/www/app
EXPOSE 80
