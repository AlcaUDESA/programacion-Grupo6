const database = require('../db/database')

const bcrypt = require('bcryptjs');

const db = require("../database/models")
const User = db.User

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

    procesarLogin : (req, res) => {

        User.findOne({where: [ {email: req.body.email}]})
        .then((result) =>{
            console.log (result)
        })
    },

    
    register: (req,res) =>{
        return res.render('register')
    },
    edit: (req,res) =>{
        return res.render('profile-edit',{
            usuario: database.usuario
        })
    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('id');
        return res.render("login")
    },
}

module.exports = userController