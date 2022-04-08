const database = require('../db/database')

const mainController = {
  index: (req,res) =>{
    return res.render('index', { productos: database.productos,
    comentarios: database.comentarios,
  usuario: database.usuario})
  },
  
  searchResults: (req,res) =>{
    return res.render('search-results')
  }
}

module.exports = mainController