const database = require('../db/database');
const bcrypt = require('bcryptjs');
const db = require("../database/models");
const res = require('express/lib/response');
const { locals } = require('../app');
const User = db.User;

const Productos = db.Product;



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

        let errors = {};

        if (req.body.email == "") {
            errors.message = "El email esta vacio";
            res.locals.errors = errors;
            return res.render('login');
           ; 

        }else if(req.body.contra == ""){
            errors.message = "La contraseña esta vacia";
            res.locals.errors = errors;
            return res.render('login'); 
        } else {
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
                             } 
                        else 
                        {
                        errors.message = "Contraseña incorrecta";
                        res.locals.errors = errors;
                        return res.render('login');
                }

            } else {
                errors.message = "Email no registrado";
                res.locals.errors = errors;
                return res.render('login');
            }
        })}
    },

    //Renderizar la vista que de registro que el usuario pidió//
    register: (req,res) =>{
        return res.render('register')
    },

    //Procesar la información enviada en el formulario de Register//
    procesarRegister: (req,res) =>{   

        //capturamos la información del formulario para procesarla//
        let info = req.body;
        let picture = req.file.filename; 

        //creamos un objeto literal con la informacion especifica del nuevo usuario//
        let usuarioNuevo = {
            nombre: info.nameUsuario,
            //Hasheamos la contrasenia porque es informacion sensible//
            contra: bcrypt.hashSync(info.password,10),
            email: info.emailUsuario,
            birthdate: info.dateUpload,
            picture: info.imagenUsuario,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        }

        //Enviamos el objeto literal como nuevo registro a nuestro modelo de alias "User"//
        User.create(usuarioNuevo)
        .then((result) => {
            //Redirigimos la informacion del usuario hacia la ruta de login//
            return res.redirect("/users/login")
        }).catch((err) => {
            
        });
    },

    edit: (req,res) =>{
        return res.render('profile-edit',{
            usuario: database.usuario
        })
    },
    procesarEdit: (req,res) => {

        User.update({
            email: req.body.emailUsuario,
            contra: req.body.Password,
        
            
            
          },{
            where: {
                id: req.cookies.id
            }

          })
          .then((result) => {
            return res.redirect("/user/profile");
          }).catch((err) => {
            return res.send(err)
          });
         
    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('id');
        return res.render("login")
    },
}

module.exports = userController