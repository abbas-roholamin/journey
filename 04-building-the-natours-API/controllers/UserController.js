class UserController {
    getAllUsers(req, res) {
        res.status(200).json({
            status: 'success',
            data: {
                users: [],
            },
        });
    }

    createUser(req, res) {
        res.status(201).json({
            status: 'success',
            data: {
                user: {},
            },
        });
    }

    getUser(req, res) {
        res.status(200).json({
            status: 'success',
            data: {
                user: {},
            },
        });
    }

    updateUser(req, res) {
        res.status(200).json({
            status: 'success',
            data: {
                user: {},
            },
        });
    }

    deleteUser(req, res) {
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
}

module.exports = new UserController();
