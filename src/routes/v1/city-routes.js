const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

// /api/v1/airplanes POST
router.post(
	'/',
	CityMiddlewares.validateCreateRequest,
	CityController.createCity
);

router.delete('/:id', CityController.destroyCity);

router.patch('/:id', CityController.updateCity);

module.exports = router;
