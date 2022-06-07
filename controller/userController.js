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
            if (result != null) {

                let contraEncrip = bcrypt.compareSync( req.body.contra , result.contra)
                if (contraEncrip) {

                    req.session.User = result.dataValues;

                    if (req.body.remember != undefined) {
                        res.cookie('id', result.dataValues.id, {maxAge : 1000 * 60 *10 } )
                    }

                    return res.redirect("/")
                } else {
                    return res.send("La contraseña de" +  result.email + " es incorrecta");
                }

            } else {
                return res.send("No existe este mail: " +  req.body.email);
            }
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