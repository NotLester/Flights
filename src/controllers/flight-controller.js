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
		const flight = await FlightService.getAllFlights(req.query);
		SuccessResponse.data = flight;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function getFlight(req, res) {
	try {
		const flight = await FlightService.getFlight(req.params.id);
		SuccessResponse.data = flight;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function updateSeats(req, res) {
	try {
		console.log(req.params);
		const response = await FlightService.updateSeats({
			flightId: req.params.id,
			seats: req.body.seats,
			dec: req.body.dec,
		});
		SuccessResponse.data = response;
		return res.status(StatusCodes.OK).json(SuccessResponse);
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
	getFlight,
	updateSeats,
};
