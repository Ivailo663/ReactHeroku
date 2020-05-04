const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("./dist", { index: "index.html" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log("hello from middleware");
  return next();
});

app.get("/asdf", (req, res) => {
  res.json({
    message: "message from the server!",
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
