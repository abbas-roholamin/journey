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
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});

// Start the server
app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:${process.env.PORT}`); // eslint-disable-line
});
