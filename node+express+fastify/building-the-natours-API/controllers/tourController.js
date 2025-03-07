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
            let queryString = { ...req.query };
            const excludeFields = ['page', 'sort', 'limit', 'fields'];

            excludeFields.forEach((field) => {
                delete queryString[field];
            });

            const queryStr = JSON.stringify(queryString);
            queryString = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

            let query = Tour.find(JSON.parse(queryString));

            if (req.query.sort) {
                const sortBy = req.query.sort.split(',').join(' ');
                query = query.sort(sortBy);
            } else {
                query = query.sort('-createdAt');
            }

            if (req.query.fields) {
                const fields = req.query.fields.split(',').join(' ');
                query = query.select(fields);
            } else {
                query = query.select('-__v');
            }

            const page = req.query.page * 1 || 1;
            const skip = (page - 1) * 3;
            query = query.skip(skip).limit(3);

            if (req.query.page) {
                const numTours = await Tour.countDocuments();
                if (skip >= numTours) {
                    throw new Error('This page does not exist');
                }
            }

            const tours = await query;

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

    async getTourStats(req, res) {
        try {
            const stats = await Tour.aggregate([
                {
                    $match: { ratingsAverage: { $gte: 4.5 } },
                },
                {
                    $group: {
                        _id: { $toUpper: '$difficulty' },
                        numTours: { $sum: 1 },
                        numRatings: { $sum: '$ratingsQuantity' },
                        avgRating: { $avg: '$ratingsAverage' },
                        avgPrice: { $avg: '$price' },
                        minPrice: { $min: '$price' },
                        maxPrice: { $max: '$price' },
                    },
                },
                {
                    $sort: { avgPrice: 1 },
                },
            ]);

            res.status(200).json({
                status: 'success',
                data: {
                    stats,
                },
            });
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }

    async getMonthlyPlan(req, res) {
        try {
            const year = req.params.year * 1;
            const plan = await Tour.aggregate([
                {
                    $unwind: '$startDates',
                },
                {
                    $match: {
                        startDates: {
                            $gte: new Date(`${year}-01-01`),
                            $lte: new Date(`${year}-12-31`),
                        },
                    },
                },
                {
                    $group: {
                        _id: { $month: '$startDates' },
                        numTourStarts: { $sum: 1 },
                        tours: { $push: '$name' },
                    },
                },
                {
                    $addFields: { month: '$_id' },
                },
                {
                    $project: {
                        _id: 0,
                    },
                },
                {
                    $sort: { numTourStarts: -1 },
                },
                {
                    $limit: 12,
                },
            ]);

            res.status(200).json({
                status: 'success',
                data: {
                    plan,
                },
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
