FROM node:10-alpine
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 6667
COPY config.json .
COPY index.js .
CMD ["node", "index.js"]
