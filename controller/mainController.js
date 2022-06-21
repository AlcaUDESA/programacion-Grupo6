const db = require('../database/models');
const products = db.Product;
const op = db.Sequelize.Op;

const mainController = {
  index: (req,res) =>{
    //Promesa findAll para traer todos los productos//
    products.findAll({
      //Los ordenamos descendentemente según fecha de creación//
      order: [  [ 'created_at', 'DESC' ]],
      //Traemos un límite de 10 productos a la  home page//
      limit:10,
      include: {
      all:true, 
      nested:true
      }
    })
    .then((results)=>{
      //Renderizamos la vista de Index-Home page y le pasamos a la vista informacion de los results de la promesa// 
      res.render('index' , {
        results: results,
      })}
)},
  searchResults: (req,res) =>{
let busqueda = req.query.search;
let errorsBuscador ={};

products.findAll({
  include: [{
    association: 'User'
 }, {
    association: 'Coments'
 }],
 where: {
    [op.or]: [{
          nombre: {
             [op.like]: `%${busqueda}%`
          }
       },
       {
          description: {
             [op.like]: `%${busqueda}%`
          }
       }
    ]
 }
}).then(function (productosCoincidentes) {
 
  if(productosCoincidentes.length == 0 || busqueda == ""){
    errorsBuscador.message = "No hay resultados para su criterio de búsqueda";
    res.locals.errorsBuscador = errorsBuscador; 
    return res.render('search-results', 
    {
      productos: productosCoincidentes,
    })
  }else{
return res.render('search-results', {
  productos: productosCoincidentes,
})
  }
})
  }
}

module.exports = mainController;
  