const bcrypt = require('bcryptjs');
const db = require("../database/models");
const User = db.User;

const userController = {
    show: (req,res)=>{
        
        let id = req.params.id;

    User.findByPk(id, {
      include: {
        all: true,
        nested: true
      }})
      .then((result) =>{
        
        let infoUser =  {
            nombre: result.nombre,
            email: result.email,
            picture: result.picture,
            productos: result.Product,
            comenta: result.Coments,
            idUrl: req.params.id,
            
        }
        console.log(infoUser)
        return res.render('profile',infoUser )
       
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

        //capturamos la información del formulario para procesarla, para ello lo guardamos en una variable//
        let info = req.body;
        //Creamos una variable guardando la foto de perfil que el usuario quiere subir al storage//

        //Creamos el objeto literal errors para guardar los errores de register en un objeto que podemos aprovechar en la vista//
        let errors = {};

        //Hacemos la validacion del formulario de register con condicionales//
        if(info.nameUsuario == ""){
            errors.message = "El nombre esta vacío";
            res.locals.errors = errors;
            return res.render('register')
        } else if(info.password == ""){
            errors.message = "La contraseña esta vacía";
            res.locals.errors = errors;
            return res.render('register')
        } else if(info.password.length < 3){
            errors.message = "La contraseña debe tener al menos tres caracteres";
            res.locals.errors = errors;
            return res.render('register')
        } else if(info.emailUsuario == ""){
            errors.message = "Debes escribir un email para registrarte";
            res.locals.errors = errors; 
            return res.render('register'); 
        }else if(info.emailUsuario == User.email){
            errors.message = "Debes escribir un email para registrarte";
            res.locals.errors = errors; 
            return res.render('register');
        }
        else{
        //creamos un objeto literal con la informacion especifica del nuevo usuario//
            let picture = req.file.filename
            let usuarioNuevo = {
                nombre: info.nameUsuario,
                //Hasheamos la contrasenia porque es informacion sensible//
                contra: bcrypt.hashSync(info.password,12),
                email: info.emailUsuario,
                birthdate: info.dateUpload,
                dni: info.dni,
                picture: picture,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            }
        //Enviamos el objeto literal como nuevo registro a nuestro modelo de alias "User"//
            User.create(usuarioNuevo)
            .then((result) => {
                //Redirigimos la informacion del usuario hacia la ruta de login//
                res.redirect("/user/login")
            }).catch((err) => {
                console.log(err)
            });
        }

    },

    edit: (req,res) =>{
        return res.render('profile-edit',{
            
        })
    },
    procesarEdit: (req,res) => {

        User.update({
            picture: req.body.imagenUsuario,
            nombre: req.body.nameUsuario,
            email: req.body.emailUsuario,
            contra: bcrypt.hashSync(req.body.Password,10),
            birthdate: req.body.dateUpload,
            
            
            
          },{
            where: {
                id: req.params.id
            }

          })
          .then((result) => {
            return res.redirect("/user/login");
          }).catch((err) => {
            return res.send(err)
          });
         
    },

    follow: (req, res) => { 

       
        User.create({

            follower_id: locals.User.id,
            following_id: req.params.id,
        }
            

        )
    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('id');
        return res.render("login")
    },
}

module.exports = userController