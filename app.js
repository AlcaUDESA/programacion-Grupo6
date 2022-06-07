const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
let session = require('express-session')

// view engine setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use(session({
//     secret : 'myApp',
//     resave : false,
//     saveUninitialized : true
//   }));
  
 
//   app.use(function(req, res, next) {
//     if ( req.session.user != undefined) {
//       res.locals.user = req.session.user;
//       return next()
//     }
//     return next();
//   });
//   app.use(function(req, res, next) {
//     if (req.cookies.id != undefined && req.session.user == undefined) {

//       let idUsuarioEnCookie = req.cookies.id;

//       db.User.findByPk(idUsuarioEnCookie)
//       .then((user) => {
//         req.session.user = user.dataValues;
//         res.locals.user  = user.dataValues;
//         return next();
//       }).catch((error) => {
//         console.log(error);
//       });
//     } else {
//       return next();
//     }
// })

//requerimiento de rutas: 
const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//declarar el uso de rutas: 
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

module.exports = app;
