const userController = require('../controller/userController')
const express = require('express')
const router = express.Router();

//Importaciones de Multer y Path//
let multer = require('multer');
let path = require('path');

/* Configuración de multer */
let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '/public/images/users'));
    },
    filename : function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage : storage})

//Rutas existentes//
router.get('/profile/:id' , userController.show)

router.get('/login', userController.login)
router.post('/login', userController.procesarLogin)

router.get('/register', userController.register)
router.post('/register',upload.single('imagenUsuario'), userController.procesarRegister)

router.get('/profile/edit/:id', userController.edit)
router.post('/profile/edit/:id', userController.procesarEdit)

router.post("/logout", userController.logout)

module.exports = router;