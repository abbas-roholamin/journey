const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const database = require('./config/db');

const TourRouter = require('./routes/TourRouter');
const UserRouter = require('./routes/UserRouter');

dotenv.config();

database((connection, error) => {
    if (error) {
        process.exit(1);
        console.log(error); // eslint-disable-line
    } else {
        console.log('Database connection successful!'); // eslint-disable-line
    }
});

const app = express();

// Middleware
app.use(express.static(`${__dirname}/public`));
app.use(express.json());

if (process.env.MODE === 'dev') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Routes
app.use(TourRouter);
app.use(UserRouter);
app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Can't find ${req.originalUrl} on this server!`,
    // });

    const error = new Error(`Can't find ${req.originalUrl} on this server!`);
    error.statusCode = 404;
    error.status = 'fail';

    next(error);
});

app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
    });
});

// Start the server
app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:${process.env.PORT}`); // eslint-disable-line
});
