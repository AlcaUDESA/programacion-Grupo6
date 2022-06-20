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

    let querySearch = req.query.search

    let errors = {}

    products.findAll(
      {
        include: [{
          association: 'User'
      }, {
          association: 'Coments'
      }],
      where: {
          [op.or]: [{
                nombre: {
                [op.like]: `%${querySearch}%`
                }
            },
            {
                descripcion: {
                  [op.like]: `%${querySearch}%`
                }
            }
          ]
      }
      }).then((resultadosDeBusqueda)=>{
          if(!resultadosDeBusqueda){
            errors.message = "No hay resultados para su criterio de búsqueda";
            res.locals.errors = errors; 
            return res.render('/search-results'); 

          }else{
            return res.render('/search-results', {
              results: resultadosDeBusqueda,
            })
          }
      }).catch((errors) =>{
        console.log(errors)
      })
  },
}

module.exports = mainController;