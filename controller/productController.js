const database = require('../db/database');
const db = require('../database/models');

const Product = db.Product
const Coments = db.Coments

const productController = {
  show: (req,res)=>{
    let productSelected = Product.findByPk(req.params.id, {include: [{association: 'User'}]})
    let commentSelected = Coments.findAll({where:{producto_id: req.params.id}, include:[{association: 'User'}]})
    Promise.all([productSelected, commentSelected])
    .then((result) =>{
      console.log(result[1])
      res.render('product', {producto: result[0].dataValues, comentarios: result[1]} )
    })

  },
  showAdd: (req, res)=>{
    console.log(req.session.User.id)
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
      usuario_id: req.session.User.id
    })
    .then((results) =>{ res.redirect('/')
    })
    .catch((errors) =>{ console.log(errors)})
  },
  productEdit: (req,res) =>{

  }
};
module.exports = productController;
