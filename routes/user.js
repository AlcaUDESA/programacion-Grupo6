const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')

//Importaciones de Multer y Path//

let multer = require('multer');
let path = require('path');

/* Configuración de multer */
let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/'));
    },
    filename : function(req, file, cb) {
            //    Tenemos  fotoDePerfil123.jpg //
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage : storage})

//Rutas existentes//
router.get('/profile' , userController.show)
router.get('/login', userController.login)
router.post('/login', userController.procesarLogin)
router.get('/register', userController.register)
router.post('/register', userController.procesarRegister)
router.get('/profile/edit', userController.edit)
router.post('/profile/edit', userController.procesarEdit)
router.post("/logout", userController.logout)

module.exports = router;