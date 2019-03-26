'use strict';

class FileRepository {
    constructor() {
        this.files = new Map();
    }

    getAllbyUser(userName) {
        // Returns an array of json objects.
        // JSON objects have name and content fields.
        var returnArray = [];
        var userFiles = this.files.get(userName);
        if (userFiles) {
            userFiles.forEach((value, key, map) => {
                returnArray.push({'name': key, 'content': value});
            })
        }
        return returnArray;
    }

    getFilebyUser(userName, fileName) {
        // Returns an object with name and content fields.
        return {'name': fileName,
                'content': this.files.get(userName).get(fileName)};
    }

    addFilebyUser(userName, fileName, fileContent) {
        // Returns an object with name and content fields.
        var returnObject = undefined
        var userFiles = this.files.get(userName);
        if (userFiles === undefined) {
            this.files.set(userName, new Map([[fileName, fileContent]]));
            returnObject = this.getFilebyUser(userName, fileName)
        } else {
            var file = userFiles.get(fileName);
            if (file === undefined) {
                userFiles.set(fileName, fileContent);
                returnObject = this.getFilebyUser(userName, fileName)
            } else {
                returnObject = this.updateFilebyUser(userName,
                    fileName,
                    fileContent)
            }
        }
        return returnObject
    }

    updateFilebyUser(userName, fileName, fileContent) {
        // Returns an object with name and content fields.
        var returnObject = undefined
        var userFiles = this.files.get(userName);
        if (userFiles !== undefined) {
            var file = userFiles.get(fileName);
            if (file !== undefined) {
                userFiles[fileName] = fileContent;
                returnObject = this.getFilebyUser(userName, fileName)
            }
        }
        return returnObject
    }
}

const fileRepository = new FileRepository();

module.exports = fileRepository;
