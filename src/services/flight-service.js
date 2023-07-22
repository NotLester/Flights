const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data) {
	try {
		const flight = await flightRepository.create(data);
		return flight;
	} catch (error) {
		if (error.name == 'SequelizeValidationError') {
			let explanation = [];
			error.errors.forEach((err) => {
				explanation.push(err.message);
			});
			throw new AppError(explanation, StatusCodes.BAD_REQUEST);
		}
		throw new AppError(
			'Cannot create a new flight object',
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

// async function updateAirport(data, id) {
// 	try {
// 		const response = await airportRepository.update(data, id);
// 		return response;
// 	} catch (error) {
// 		if (error.statusCode == StatusCodes.NOT_FOUND) {
// 			throw new AppError(
// 				'The airport you requested to update is not present',
// 				error.statusCode
// 			);
// 		}
// 		throw new AppError(
// 			'Cannot fetch data of airport',
// 			StatusCodes.INTERNAL_SERVER_ERROR
// 		);
// 	}
// }

module.exports = {
	createFlight,
};
