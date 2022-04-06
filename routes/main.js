const mainController = require('../controller/mainController')

const express = require('express')
const router = express.Router();

router.get('/', mainController.index)
router.get('/search-results', mainController.searchResults)


module.exports = router