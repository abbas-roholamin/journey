const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/api/v1/users', UserController.getAllUsers);
router.post('/api/v1/users', UserController.createUser);
router.patch('/api/v1/users/:id', UserController.updateUser);
router.get('/api/v1/users/:id', UserController.getUser);
router.delete('/api/v1/users/:id', UserController.deleteUser);

module.exports = router;
