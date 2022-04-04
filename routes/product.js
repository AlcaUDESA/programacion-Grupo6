const productController = require('../controller/productController')

const express = require('express')
const router = express.Router();

router.get('/add', productController.add)

module.exports = router