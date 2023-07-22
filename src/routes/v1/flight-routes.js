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


module.exports = router;