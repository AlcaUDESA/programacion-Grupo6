const db = require('../database/models');

const Product = db.Product
const Coments = db.Coments

const productController = {
  show: (req,res)=>{
    let productSelected = Product.findByPk(req.params.id, {include: [{association: 'User'}]})
    let commentSelected = Coments.findAll({where:{producto_id: req.params.id}, include:[{association: 'User'}], order: [['created_at','DESC']]})
    Promise.all([productSelected, commentSelected])
    .then((result) =>{
      req.session.product = req.params.id
      console.log(typeof req.session.user_id); 
      console.log(req.session);
      res.render('product', {producto: result[0].dataValues, comentarios: result[1], usuario: req.session.user_id} )
    })

  },
  showAdd: (req, res)=>{
    console.log(req.session.User.id)
    return res.render('product-add', {
      usuario: db.usuario,
      comentarios: db.comentarios,
      productos: db.productos
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

  },
  comment: (req, res) =>{
      Coments.create({
        usuario_id: req.session.User.id,
        producto_id: req.session.product,
        contenido: req.body.comentario
      }).then((result) =>{
        res.redirect('/product/id/' + req.session.product)
      })
  },
  productDelete: (req, res) =>{
   Product.destroy({where:{ id: req.params.id,}})
   .then(result =>{
    res.redirect('/')
   })
  },
  showEdit: (req, res)=>{
    Product.findByPk(req.params.id)
    .then((result)=>{
      console.log(req.session);
      res.render('product-edit', {product: result, id: req.params.id})
    })
  },
  productEdit: (req, res) =>{
    Product.update({
      nombre: req.body.nombre,
      image: req.file.filename,
      description: req.body.description,
      usuario_id: req.session.User.id,
      updated_at: new Date(),
    }, {where: {id: req.params.id}}).then((result)=>{
      res.redirect('/user/profile/'+ req.session.User.id)
    })
  }
};
module.exports = productController;
