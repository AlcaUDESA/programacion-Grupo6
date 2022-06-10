const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
let session = require('express-session')

const db = require("./database/models")
const User = db.User

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


 app.use(session({
   secret : 'myApp',
   resave : false,
  saveUninitialized : true
  }));
  
 
  app.use(function(req, res, next) {
    if ( req.session.User != undefined) {
    res.locals.User = req.session.User;
     return next()
  }
       return next();
   });

   app.use(function(req, res, next) {
    if (req.cookies.id != undefined && req.session.user == undefined) {
        let idUser = req.cookies.id;
  
        User.findByPk(idUser)
        .then((user) => {
          req.session.User = user.dataValues;
          res.locals.User = user.dataValues;
          return next();
        }).catch((err) => {
          console.log(err);
        });
  
    } else {
      return next();
    }
  
  });

//requerimiento de rutas: 
const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')



//declarar el uso de rutas: 
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

module.exports = app;
