const userController = require('../controller/userController')

const express = require('express')
const router = express.Router();

router.get('/login', userController.login)

module.exports = router