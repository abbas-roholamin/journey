const express = require('express');

const TourController = require('../controllers/TourController');
const ValidateTourIDMiddleware = require('../middleware/ValidateTourIDMiddleware');
const TopToursMiddleware = require('../middleware/TopToursMiddleware');

const router = express.Router();

router.param('id', ValidateTourIDMiddleware);

router.get('/api/v1/tours/top-tours', TopToursMiddleware, TourController.getAllTours);
router.get('/api/v1/tours', TourController.getAllTours);
router.post('/api/v1/tours', TourController.createTour);
router.patch('/api/v1/tours/:id', TourController.updateTour);
router.get('/api/v1/tours/:id', TourController.getTour);
router.delete('/api/v1/tours/:id', TourController.deleteTour);

module.exports = router;
