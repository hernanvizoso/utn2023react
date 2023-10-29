var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

// SELECT *
pool.query('select * from empleados').then(function
  (resultados) {
  console.log(resultados)
});

// SELECT de dos campos usando una constante
var nombreEdad = 'select nombre, edad from empleados'

pool.query(nombreEdad).then(function
  (resultados){
    console.log(resultados);
  })

// SELECT de dos campos usando 2 constantes 

// var orderBy = 'order by edad asc';

var orderBy = 'order by id_empleado asc';

pool.query(nombreEdad + ' ' + orderBy).then(function
  (resultados){
    console.log(resultados);
  })

// INSERT
var registro = {
  nombre: 'Juan',
  apellido: 'Lopez',
  trabajo: 'panadero',
  edad: 33,
  salario: 9000,
  mail: 'panadero_juan@gmail.com'
}


pool.query('insert into empleados set ?', registro).then(function
  (resultados) {
  console.log(resultados)
});

// UPDATE

var queryUpdate = 'update empleados set ? where id_empleado = ?'
var id = 25;
var registroUpdate = {
  nombre: 'Joaquin',
  apellido: 'Sabina',
  mail: 'joaquin_sabina@gmail.com'
}

pool.query(queryUpdate, [registroUpdate, id]).then(function
  (resultados){
    console.log(resultados)
  });

// BORRAR

var borrarID = 23;
var queryBorrar = 'delete from empleados where id_empleado = ?'

pool.query(queryBorrar,[borrarID]).then(function
  (resultados){
    console.log(resultados)
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
