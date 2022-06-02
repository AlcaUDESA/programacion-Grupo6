const database = require('../db/database');
const db = require('../database/models');
const Products = db.Products;
const productController = {
  show: (req,res)=>{
    return res.render('product',  {
      usuario: database.usuario,
      comentarios: database.comentarios,
      productos: database.productos,
      idSelected: req.params.id,
  })
  },
  showAdd: (req, res)=>{
    return res.render('product-add', {
      usuario: database.usuario,
      comentarios: database.comentarios,
      productos: database.productos
  })
  },
  productAdd: (req, res) => {
    console.log('req.body');
    Products.create({
      nombre: req.body.nameProduct,
      image: req.body.imgProduct,
      description: req.body.description,
      postDate: req.body.dateUpload
    })
    .then((results) =>{ res.redirect('/')
    })
    .catch((errors) =>{ console.log(errors)})
  }
};
module.exports = productController;
