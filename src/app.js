var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
// require('./db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 跨域设置
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")   // accept,x-requested-with,Content-Type
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})

// filter
app.all('*', function (req, res, next) {
    console.log('进入filter', req.body);
    console.log('cookie', req.cookies)
    next()
})

app.use('/', index);
app.use('/users', users);

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
  // res.render('error');
});




var debug = require('debug')('my-application'); // debug模块
app.set('port', process.env.PORT || 3001); // 设定监听端口

// Environment sets...

// module.exports = app; 这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来

//启动监听
if(process.env.mode == 'dev') {
    var server = app.listen(app.get('port'), function() {
        debug('Express server listening on port ' + server.address().port);
    });
} else {
    // https
    var https = require('https');
    var privateKey  = fs.readFileSync(path.join(__dirname,"../cert/3808142_www.10billions.com.cn.key"), 'utf8');
    var certificate = fs.readFileSync(path.join(__dirname,"../cert/3808142_www.10billions.com.cn.pem"), 'utf8');
    var options={key:privateKey, cert:certificate};
    var server = https.createServer(options, app);
    server.listen(app.get('port'));
}

module.exports = app;
