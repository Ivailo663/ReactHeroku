const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const carsRoutes = require("./server/routes/carRoutes");
const Car = require("./server/models/model");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3002;

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.USER_PASS);

app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const car = new Car({
  brand: "Opel",
  model: "Insignia",
  price: 7200,
  km: 10000,
});

car
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.log(err));

app.use(express.static("./dist", { index: "index.html" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log("hello from middleware");
  return next();
});

app.use("/all", carsRoutes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
