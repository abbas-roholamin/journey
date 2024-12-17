const express = require('express');
const morgan = require('morgan');

const TourController = require('./controllers/TourController');
const UserController = require('./controllers/UserController');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.get('/api/v1/tours', TourController.getAllTours);
app.post('/api/v1/tours', TourController.createTour);
app.patch('/api/v1/tours/:id', TourController.updateTour);
app.get('/api/v1/tours/:id', TourController.getTour);
app.delete('/api/v1/tours/:id', TourController.deleteTour);

app.get('/api/v1/users', UserController.getAllUsers);
app.post('/api/v1/users', UserController.createUser);
app.patch('/api/v1/users/:id', UserController.updateUser);
app.get('/api/v1/users/:id', UserController.getUser);
app.delete('/api/v1/users/:id', UserController.deleteUser);

app.listen(8000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:8000');
});
