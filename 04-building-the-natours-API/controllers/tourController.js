const Tour = require('../models/Tour');

class TourController {
    async getTour(req, res) {
        try {
            const tour = await Tour.findById(req.params.id);

            res.status(200).json({
                status: 'success',
                requestedAt: req.requestTime,
                data: {
                    tour,
                },
            });
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }

    async getAllTours(req, res) {
        try {
            const tours = await Tour.find();

            res.status(200).json({
                status: 'success',
                results: tours.length,
                data: {
                    tours,
                },
            });
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }

    async createTour(req, res) {
        try {
            const tour = await Tour.create(req.body);

            res.status(201).json({
                status: 'success',
                data: {
                    tour,
                },
            });
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: error.message,
            });
        }
    }

    async updateTour(req, res) {
        try {
            const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });

            res.status(200).json({
                status: 'success',
                data: {
                    tour,
                },
            });
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }

    async deleteTour(req, res) {
        try {
            await Tour.findByIdAndDelete(req.params.id);

            res.status(204).json({
                status: 'success',
                data: null,
            });
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }
}

module.exports = new TourController();
