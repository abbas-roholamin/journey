const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours,
        },
    });
});

app.post('/api/v1/tours', (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour,
            },
        });
    });
});

app.patch('/api/v1/tours/:id', (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
});

app.get('/api/v1/tours/:id', (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
});

app.listen(8000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:8000');
});
