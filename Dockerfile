FROM node:18.3.0

WORKDIR /data
COPY site/ /data/site/

WORKDIR /data/site
RUN npm install
CMD [ "node", "server.js" ]