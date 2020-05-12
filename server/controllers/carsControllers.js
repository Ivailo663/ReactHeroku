const Car = require("../models/model");

exports.allCars = async (req, res) => {
  const cars = await Car.find();
  console.log("allCars", req.query);
  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};
exports.specificCar = async (req, res) => {
  const query = Car.find(req.params);
  const cars = await query;

  console.log("specificCar", req.params);

  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};
