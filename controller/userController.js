const database = require('../db/database')
const userController = {

    login: (req, res) => {
        res.render('login')
    },
    register: (req,res) =>{
        res.render('register')
    },
    edit: (req,res) =>{
        res.render('profile-edit')
    }
}


module.exports = userController