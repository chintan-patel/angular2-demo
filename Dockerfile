# Get the image
FROM node:0.10.40
MAINTAINER Chintan Patel

## Copy the Application
RUN npm install -g live-server
ADD . /opt/app/
WORKDIR /opt/app/src
## Expose the PORT
EXPOSE 8080

CMD ls -tlra

CMD ["npm", "start"]
