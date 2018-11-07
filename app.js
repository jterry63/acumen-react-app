var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


var index = require('./routes/index');
var users = require('./routes/users');
var surveys = require('./routes/surveys');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
    use_env_variable: "JAWSDB_URL",
    user: 'xtzk6cvsnpsc4s9z',
    password: 'ku5yu5p1h0c2fi4c',
    port: 3306,
    dialect: 'mysql',
    host: 'y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
	});
	res.locals.connection.connect();
	next();
});

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'client/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/surveys', surveys);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var http = require('http');
module.exports = app;
var server = http.createServer(app);
server.listen(4007);

