const database = require('../db/database')

const mainController = {
  index: (req,res) =>{
    res.render('index')
  },
  
  searchResults: (req,res) =>{
  res.render('search-results')
  }
}

module.exports = mainController