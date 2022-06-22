const productController = require('../controller/productController')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './public/images/products')
  },
  filename: function (req, file, cb){
    cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname))
  }
})
const upload = multer({ storage });

router.get('/add', productController.showAdd);
router.post('/add', upload.single('imgProduct'), productController.productAdd);

router.get('/id/:id', productController.show);
router.post('/id/:id', productController.productDelete)

router.post('/comment', productController.comment)

router.get('/edit/:id', productController.showEdit)
router.post('/edit/:id', upload.single('imgProduct'), productController.productEdit)


module.exports = router;