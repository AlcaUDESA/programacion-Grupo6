const db = require('../database/models');
const products = db.Product;

const mainController = {
  index: (req,res) =>{
    //Promesa findAll para traer todos los productos//
    products.findAll({
      //Asociaciones necesarias//
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
    //Promesa findAll para traer todos los resultados de busqueda posibles de productos//
    products.findAll({
      //Incluimos la asociacion con usuario y comentarios//
      include: [{association: 'User'}, {association: 'Coments'}],
      //Utilizamos un where con operador para que la búsqueda sea pertinente//
      where: [{model: {[op.like]: '%'+ req.query.search + '%' }}],
    })
      .then((results)=>{
      //Renderizamos la vista de Search Resultsy le pasamos a la vista informacion de los results de la promesa//
      return res.render('search-results', {
          results: results,
          query: req.query.search,
        });
      }).catch((errors) =>{console.log(errors)})
      
  },
}

module.exports = mainController;