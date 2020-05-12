const express = require("express");
const router = express.Router();
const controllers = require("../controllers/carsControllers");

router.route("/").get(controllers.allCars);

router.route("/:model").get(controllers.specificCar);

module.exports = router;
