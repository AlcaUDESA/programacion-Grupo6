const database = require('../db/database')

const bcrypt = require('bcryptjs');

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
        let info = req.body;
        let filtro = {where : [ { email : info.email}]};

        user.findOne(filtro)
        .then((result) => {

            if (result != null) {

                let passEncriptada = bcrypt.compareSync(info.password , result.password)
                if (passEncriptada) {

                    req.session.user = result.dataValues;

                    if (req.body.remember != undefined) {
                        res.cookie('userId', result.dataValues.id, {maxAge : 1000 * 60 *10 } )
                    }

                    return res.redirect("/movies/all")
                } else {
                    return res.send("el usuario con el mail " +  result.email + " existe pero la clave es incorrecta");
                }

            } else {
                return res.send("No esta registrado" +  info.email);
            }
        }).catch((err) => {

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