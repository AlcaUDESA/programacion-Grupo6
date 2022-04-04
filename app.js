const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
app.use('/product', productRouter)
module.exports = app;
