const express = require('express');
const morgan = require('morgan');

const TourRouter = require('./routes/TourRouter');
const UserRouter = require('./routes/UserRouter');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Routes
app.use(TourRouter);
app.use(UserRouter);

// Start the server
app.listen(8000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:8000');
});
