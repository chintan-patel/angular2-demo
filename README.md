# Steps to run this application

1. Run `gulp`

1. `cd dist`

1. Run `npm install`

1. Start server `live-server`

1. Go to browser with URL: `http://localhost:8080`

# Run the application in Docker

1. Setup Docker using `Docker Toolbox` from [Docker Official Website](https://www.docker.com/docker-toolbox).

1. Run `gulp`

1. Build the image: `docker build -t angular-2-demo-image .`

1. `docker run --rm -p 8080:8080 angular-2-demo-image`

1. Generate URL for this application: `echo http://$(docker-machine ip default):8080/`