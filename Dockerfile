# FROM node:alpine
# WORKDIR /app 
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["npm ","start"];

FROM nginx:stable-alpine
RUN npm build
COPY build/ /usr/share/nginx/html