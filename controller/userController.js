const bcrypt = require('bcryptjs');
const db = require("../database/models");
const User = db.User;
const userController = {
    show: (req,res)=>{
        
        let id = req.params.id;

        let promesaUser=  User.findByPk(id, {
           include: {
             all: true,
             nested: true
           }});
         let promesafolow =  db.Follower.findAll({where: [ {following_id: id}]});
     
     Promise.all([promesaUser,promesafolow])
           
           .then(([promesaUser,promesafolow]) =>{
               
             return res.render('profile', 
                 {
                 user:promesaUser,
                 follow: promesafolow,
                 id: req.params.id
             });
         });
        

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
                            req.session.user_id = result.dataValues.id
                            res.locals.user = req.session.user
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
        //Creamos el objeto literal errors para guardar los errores de register en un objeto que podemos aprovechar en la vista//
        let errors = {};

        //Hacemos la validacion del formulario de register con condicionales para nombre de Usuario, Contraseña y eMail//
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
        //Creamos el filtro de mail repetido//
        let IsRepeated = {where : [ { email : req.body.emailUsuario}]};  
        //Enviamos el objeto literal como nuevo registro a nuestro modelo de alias "User" en caso de que no exista el mail registrado porque sino es que hay un usuario registrado//
        User.findOne(IsRepeated)
        .then((result) => {
            //Si no existe el mail en la base de datos entonces damos de alta al usuario//
            if (!result) {
                //Utilizamos el método create para dar de alta al usuario//
                User.create(usuarioNuevo)
                .then((result) => {
                //Redirigimos la informacion del usuario hacia la ruta de login//
                res.redirect("/user/login")
                }).catch((err) => {
                    console.log(err);
                });
            } else { 
                //Si ya existe el mail en la base de datos entonces es un error//
                errors.message = "El email ya se encuentra registrado.";
                res.locals.errors = errors;
                return res.render('register');
            }
        }).catch((err) => {
            console.log(err);
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
        
       
        db.Follower.findOne({
            
            where : [{
                follower_id: req.session.User.id,
                following_id: req.params.id,
            }]
         })
         .then ((result) => {
            if (result) {
                
                return res.redirect(`/user/profile/${req.params.id}`);
            }
            else {
                db.Follower.create({
                    follower_id: req.session.User.id,
                    following_id: req.params.id,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                })
                return res.redirect(`/user/profile/${req.params.id}`);
            }
         }
         
         )
    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('id');
        return res.redirect("/")
    },
}

module.exports = userController