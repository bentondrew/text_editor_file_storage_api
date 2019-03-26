"use strict";

const express = require("express");

const PORT = 80;

const app = new express();

app.use(express.json())

require("./routes/fileRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
