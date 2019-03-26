"use strict";

const Router = require("express");
const fileRepo = require("../repo/fileRepository");

const getFileRoutes = (app) => {
    const router = new Router();
    router
        .get("/:userName", (req, res) => {
            const result = fileRepo.getAllbyUser(userName);
            res.send(result);
        })
        .get("/:userName/:fileName", (req, res) => {
            const result = fileRepo.getFilebyUser(userName, fileName);
            res.send(result);
        })
        .post("/:userName/:fileName", (req, res) => {
            const fileContent = req.body;
            const result = fileRepo.addFilebyUser(userName, fileName, fileContent);
            res.send(result);
        })
        .put("/:userName/:fileName", (req, res) => {
            const fileContent = req.body;
            const result = fileRepo.updateFilebyUser(userName, fileName, fileContent);
            res.send(result);
        });
    app.use("/files", router);
};

module.exports = getFileRoutes;
