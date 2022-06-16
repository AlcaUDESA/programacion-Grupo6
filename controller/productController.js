const database = require('../db/database');
const db = require('../database/models');

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
    db.Product.create({
      nombre: req.body.nameProduct,
      description: req.body.description,
      image: req.file.filename,
      upload_at: req.body.dateUpload,
      created_at: new Date().toISOString(),
      usuario_id: req.cookies.id
    })
    .then((results) =>{ res.redirect('/')
    })
    .catch((errors) =>{ console.log(errors)})
  },
  productEdit: (req,res) =>{

  }
};
module.exports = productController;
