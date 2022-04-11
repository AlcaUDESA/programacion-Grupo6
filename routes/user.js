const userController = require('../controller/userController')

const express = require('express')
const router = express.Router();

router.get('/profile' , userController.show)
router.get('/login', userController.login)
router.get('/register', userController.register)
router.get('/profile/edit', userController.edit)
module.exports = router