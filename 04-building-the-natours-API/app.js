const express = require('express');
const morgan = require('morgan');

const tourController = require('./controllers/tourController');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.get('/api/v1/tours', tourController.getAllTours);
app.post('/api/v1/tours', tourController.createTour);
app.patch('/api/v1/tours/:id', tourController.updateTour);
app.get('/api/v1/tours/:id', tourController.getTour);
app.delete('/api/v1/tours/:id', tourController.deleteTour);

app.listen(8000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:8000');
});
