# text_editor_file_storage_api
API service for storing files for the text editor.

## Resources
* [Dockerize node service](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Node REST API Service Tutorial](https://automationrhapsody.com/build-rest-api-express-node-js-run-docker/)
* [Node REST API Service Tutorial with MongoDB](https://blog.cloud66.com/how-to-deploy-restful-apis-using-node-express4-and-docker/)

## Docker Image Build Instructions
From directory containing the Dockerfile
```Bash
docker build -t file_storage_api:0.2.0 .
```

## Docker Run Instructions
```Bash
docker run --rm -p 80:80 file_storage_api:0.2.0
```

## Known Issues
* Image is running with root user.
* Running in dev env. Should be built and installed in prod image.
* Error checking not implemented.
* Tests not implemented.
