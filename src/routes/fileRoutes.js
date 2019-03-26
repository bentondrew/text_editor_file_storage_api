"use strict";

const Router = require("express");
const fileRepo = require("../repo/fileRepository");

const getFileRoutes = (app) => {
    const router = new Router();
    router
        .get("/:userName", (req, res) => {
            const result = fileRepo.getAllbyUser(req.params.userName);
            res.send(result);
        })
        .get("/:userName/:fileName", (req, res) => {
            const result = fileRepo.getFilebyUser(req.params.userName,
                req.params.fileName);
            res.send(result);
        })
        .post("/:userName/:fileName", (req, res) => {
            const fileContent = req.body;
            const result = fileRepo.addFilebyUser(req.params.userName,
                req.params.fileName, req.params.fileContent);
            res.send(result);
        })
        .put("/:userName/:fileName", (req, res) => {
            const fileContent = req.body;
            const result = fileRepo.updateFilebyUser(req.params.userName,
                req.params.fileName, req.params.fileContent);
            res.send(result);
        });
    app.use("/files", router);
};

module.exports = getFileRoutes;
