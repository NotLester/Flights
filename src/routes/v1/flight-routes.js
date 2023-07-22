const express = require('express');
const router = express.Router();
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

// /api/v1/airports POST
router.post(
	'/',
	FlightMiddlewares.validateCreateRequest,
	FlightController.createFlight
);

// /api/v1/airports?trips=MUN-DEL GET
router.get(
	'/',
	FlightController.getAllFlights
);


module.exports = router;