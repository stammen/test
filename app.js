/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var foo = require('./lib/foo');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express['static'](path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/',function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(foo.hello() + '!\n');

});
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
