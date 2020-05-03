const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("./dist", { index: "index.html" }));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
