var express = require('express');
var path = require('path');
//var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();


//app.use(logger('dev'));
//app.use(bodyParser.json());
//pp.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/events'),
    admin = require('./routes/admin')

app.use('/', routes);
app.use('/admin',admin);

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-  Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    
//     next();
//   });
    
//app.set('view engine', 'html');
// Set directory to contain the templates ('views')
//app.set('views', __dirname + '/views');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


module.exports = app;