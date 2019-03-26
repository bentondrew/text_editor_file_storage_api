"use strict";

const Router = require("express");
const fileRepo = require("../repo/fileRepository");

const getFileRoutes = (app) => {
    const router = new Router();
    router
        .post("/test", (req, res) => {
            res.json(req.body);
        })
        .get("/:userName", (req, res) => {
            const result = fileRepo.getAllbyUser(req.params.userName);
            res.json(result);
        })
        .get("/:userName/:fileName", (req, res) => {
            const result = fileRepo.getFilebyUser(req.params.userName,
                req.params.fileName);
            res.json(result);
        })
        .post("/:userName/:fileName", (req, res) => {
            const fileContent = req.body;
            const result = fileRepo.addFilebyUser(req.params.userName,
                req.params.fileName, fileContent["content"]);
            res.json(result);
        })
        .put("/:userName/:fileName", (req, res) => {
            const fileContent = req.body;
            const result = fileRepo.updateFilebyUser(req.params.userName,
                req.params.fileName, fileContent["content"]);
            res.json(result);
        });
    app.use("/files", router);
};

module.exports = getFileRoutes;
