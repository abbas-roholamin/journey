const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

class TourController {
    getTour(req, res) {
        res.status(200).json({
            status: 'success',
            data: {
                tour: 'The Park Camper',
            },
        });
    }

    getAllTours(req, res) {
        res.status(200).json({
            status: 'success',
            data: {
                tours,
            },
        });
    }

    createTour(req, res) {
        res.status(201).json({
            status: 'success',
            data: {
                tour: 'The Park Camper',
            },
        });
    }

    updateTour(req, res) {
        res.status(200).json({
            status: 'success',
            data: {
                tour: 'The Park Camper',
            },
        });
    }

    deleteTour(req, res) {
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
}

module.exports = new TourController();
