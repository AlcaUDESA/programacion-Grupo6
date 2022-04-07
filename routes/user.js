const userController = require('../controller/userController')

const express = require('express')
const router = express.Router();

router.get('/' , userController.show)
router.get('/login', userController.login)
router.get('/register', userController.register)
router.get('/edit', userController.edit)
module.exports = router