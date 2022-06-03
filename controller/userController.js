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
        let errors = {}
        let info = req.body;
        let filtro = {where : [ { email : info.email}]};

        User.findOne(filtro)
        .then((result) => {
        console.log(result)
            if (result != null) {

                let contraEncriptada = bcrypt.compareSync(info.contraseña , result.contraseña)
                if (contraEncriptada) {

                    req.session.user = result;

                    if (req.body.remember != undefined) {
                        res.cookie('userId', result.id, {maxAge : 1000 * 60 *5 } )
                    }

                    return res.redirect("/")
                } else {
                    return res.send("el usuario con el mail " +  result.email + " existe pero la clave es incorrecta");
                }

            } else {
                return res.send("No esta registrado" +  info.email);
            }
        }).catch((error) => {
            return "error de la pagina"
        });
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
        res.clearCookie('userId');
        return res.render("login")
    },
}

module.exports = userController