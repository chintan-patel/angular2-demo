# Get the image
FROM node:0.10-slim
MAINTAINER Chintan Patel

## Copy the Application
RUN npm install -g live-server
CMD ["npm", "start"]
## Expose the PORT
ENV NODE_ENV production
WORKDIR /opt/app/
COPY dist/package.json /opt/app/
RUN npm install
COPY dist /opt/app/


