const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
// Create User
router.post('/register', userController.register)
// Log In
router.post('/login', userController.logIn)
// Log Out
router.get('/logout', userController.logOut)

module.exports = router;