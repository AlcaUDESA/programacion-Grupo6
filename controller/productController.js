
const database = require('../db/database')

const productController = {
  show: (req,res)=>{
    res.render('product')
    for (let i = 0; i < database.length; i++) {
      
      
    }
  },
  add: (req, res)=>{
    res.render('product-add')
  }
}

module.exports = productController