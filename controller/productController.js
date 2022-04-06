
const database = require('../db/database')

const productController = {
  show: (req,res)=>{
    return res.render('product', {
      comentarios: database.comentarios
    })
  },
  add: (req, res)=>{
    return res.render('product-add')
  }
}

module.exports = productController