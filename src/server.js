"use strict";

const express = require("express");

const PORT = 80;
const HOST = "0.0.0.0";

const app = new express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("./routes/fileRoutes")(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)
