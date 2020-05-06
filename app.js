const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Car = require("./server/model");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3002;

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.USER_PASS);

app.use(express.json());

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

// const car = new Car({
//   brand: "BWM",
//   model: "X5",
//   price: 4200,
//   km: 240000,
// });

// car
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => console.log(err));

app.use(express.static("./dist", { index: "index.html" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log("hello from middleware");
  return next();
});

app.get("/asdf", async (req, res) => {
  const newCar = await Car.create(req.body);

  res.status(200).json({
    message: "message from the server!",
    data: {
      data: newCar,
    },
  });
});

app.get("/all", async (req, res) => {
  const cars = await Car.find();

  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
