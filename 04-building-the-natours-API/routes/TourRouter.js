const express = require('express');

const TourController = require('../controllers/TourController');

const router = express.Router();

router.get('/api/v1/tours', TourController.getAllTours);
router.post('/api/v1/tours', TourController.createTour);
router.patch('/api/v1/tours/:id', TourController.updateTour);
router.get('/api/v1/tours/:id', TourController.getTour);
router.delete('/api/v1/tours/:id', TourController.deleteTour);

module.exports = router;
