const database = require('../db/database')
const userController = {
    show: (req,res)=>{
        return res.render('profile', {
            usuario: database.usuario,
            productos: database.productos
        })
    },
    login: (req, res) => {
        return res.render('login')
    },
    register: (req,res) =>{
        return res.render('register')
    },
    edit: (req,res) =>{
        return res.render('profile-edit',{
            usuario: database.usuario
        })
    }
}

module.exports = userController