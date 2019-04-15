var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoConfig = require("./database/config")

var session = require("express-session")

//引入
var qiniu = require("./routes/qiniu")

var admin = require('./routes/admin');
var client = require('./routes/client');
var oldClient = require('./routes/oldClient');

var admins = require('./routes/admins');
var jfs = require("./routes/jfs")
var newsLists = require('./routes/newsLists');
var users = require('./routes/users');
var tieZis = require('./routes/tieZis');
var maps = require('./routes/maps');
var messages = require('./routes/messages');
var getData = require('./routes/getData');

var app = express();

app.use(session({
  secret: 'Huluobos',  //session签名密匙
  resave: false,//是否强制保存未更改的session到session仓库
  saveUninitialized: false,//是否强制保存未被初始化的session到仓库
  cookie: { secure: false }//session cookie的一些设置。30天过期
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//使用

app.use('/api', qiniu);
app.use('/admin', admin);
app.use('/client', client);
app.use('/oldClient', oldClient);

app.use('/api/jfs', jfs);
app.use('/api/newsLists', newsLists);
app.use('/api/users', users);
app.use('/api/tieZis', tieZis);
app.use('/api/maps', maps);
app.use('/api/messages', messages);
app.use('/api/getData', getData);
app.use('/api/admins', admins);




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

module.exports = app;
