const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

// /api/v1/airplanes POST
router.post('/', CityController.createCity);

module.exports = router;
