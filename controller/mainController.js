const database = require('../db/database')
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
    })
    .then((results)=>{
      //Renderizamos la vista de Index-Home page y le pasamos a la vista informacion de los results de la promesa//
      res.render('index' , {
        nombre: results.nombre,
        image:  results.image,
        description: results.description,
        id: results.id,
        results: results,
      })}
    )},
}

module.exports = mainController;