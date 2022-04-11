
const database = require('../db/database')

const productController = {
  show: (req,res)=>{
    return res.render('product',  {
      usuario: database.usuario,
      comentarios: database.comentarios,
      productos: database.productos,
      idSelected: req.params.id,
      description : req.params.descripcion,
  })
  },
  add: (req, res)=>{
    return res.render('product-add', {
      usuario: database.usuario,
      comentarios: database.comentarios,
      productos: database.productos
  })
  }
}

module.exports = productController;