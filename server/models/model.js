const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "must have brand"],
    unique: true,
  },
  model: {
    type: String,
    required: [true, "must have model"],
  },
  price: {
    type: Number,
    required: [true, "must have price"],
  },
  km: {
    type: Number,
    required: [true, "must have km"],
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
