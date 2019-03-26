# text_editor_file_storage_api
API service for storing files for the text editor.

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
