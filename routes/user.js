const userController = require('../controller/userController')
const express = require('express')
const router = express.Router();

router.get('/profile' , userController.show)
router.get('/login', userController.login)
router.post('/login', userController.procesarLogin)
router.get('/register', userController.register)
router.get('/profile/edit', userController.edit)
router.post('/profile/edit', userController.procesarEdit)
router.post("/logout", userController.logout)


module.exports = router