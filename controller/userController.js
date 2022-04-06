const database = require('../db/database')
const userController = {

    show: (req,res)=>{
        res.render('profile', {
            usuario: database.usuario
        })
    },

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