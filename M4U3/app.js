var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// inicio rutas con manejador de rutas

var testRouter = require('./routes/testManejador');
var futbolRouter = require('./routes/futbolManejador');
var noticiasRouter = require('./routes/noticiasManejador');

var testRender = require('./routes/testRender');
var futbolRender = require('./routes/futbolRender');
 var noticiasRender = require('./routes/noticiasRender');


// fin rutas con manejador de rutas


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testManejador', testRouter);
app.use('/futbolManejador', futbolRouter);
app.use('/noticiasManejador', noticiasRouter);

app.use('/testRender',testRender);
app.use('/futbolRender',futbolRender);
app.use('/noticiasRender',noticiasRender);

// inicio rutas simples
app.get('/test',function(req, res){
  res.send('Hola soy la pagina de test, ruta simple')
})

app.get('/noticias',function(req, res){
  res.send('Hola soy la pagina de noticias, ruta simple')
})

app.get('/futbol',function(req, res){
  res.send('Hola soy la pagina de futbol, ruta simple')
})
// fin rutas simples


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
