const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { FlightService } = require('../services');

// POST
async function createFlight(req, res) {
	try {
		const flight = await FlightService.createFlight({
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			address: req.body.address,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			arrivalTime: req.body.arrivalTime,
			departureTime: req.body.departureTime,
			price: req.body.price,
			boardingGate: req.body.boardingGate,
			totalSeats: req.body.totalSeats,
		});
		SuccessResponse.data = flight;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function getAllFlights(req, res) {
	try {
		const flights = await FlightService.getAllFlights(req.query);
		SuccessResponse.data = flights;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

// /airplanes/:id
// async function updateAirport(req, res) {
// 	try {
// 		const airport = await AirportService.updateAirport(
// 			{ capacity: req.body.capacity },
// 			req.params.id
// 		);
// 		SuccessResponse.data = airport;
// 		return res.status(StatusCodes.CREATED).json(SuccessResponse);
// 	} catch (error) {
// 		ErrorResponse.error = error;
// 		return res.status(error.statusCode).json(ErrorResponse);
// 	}
// }

module.exports = {
	createFlight,
	getAllFlights,
};
