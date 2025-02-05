const fn = require('fs');
const dotenv = require('dotenv');
const database = require('../../config/db');
const Tour = require('../../models/Tour');

dotenv.config({ path: './config.env' });

database((connection, error) => {
    if (error) {
        console.log(error); // eslint-disable-line
        process.exit(1);
    } else {
        console.log('Database connection successful!'); // eslint-disable-line
    }
});

const tours = JSON.parse(fn.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

const importData = async () => {
    try {
        await Tour.deleteMany();

        await Tour.create(tours);
        console.log('Data successfully loaded!'); // eslint-disable-line
        process.exit();
    } catch (err) {
        console.log(err); // eslint-disable-line
        process.exit(1);
    }
};

importData();
