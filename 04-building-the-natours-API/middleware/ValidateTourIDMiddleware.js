module.exports = (req, res, next, val) => {
    const id = val * 1;

    if (id <= 0) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    next();
};
