const mongoose = require('mongoose');

module.exports = async (callback) => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.DATABASE_CONNECTION);
        callback(conn, null);
    } catch (err) {
        callback(null, err);
    }
};
