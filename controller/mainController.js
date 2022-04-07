const database = require('../db/database')

const mainController = {
  index: (req,res) =>{
    return res.render('index')
  },
  
  searchResults: (req,res) =>{
    return res.render('search-results')
  }
}

module.exports = mainController