const database = require('../db/database')

const productController = {
  add: (req, res)=>{
    res.render('product-add')
  }
}

module.exports = productController