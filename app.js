// Module dependencies.
var express = require('express');

var app = express.createServer();

// Configuration
app.configure( function() {
});

// Routes
app.get('/', function(req, res) {
    var Db = require('mongodb').Db;
    var Connection = require('mongodb').Connection;
    var Server = require('mongodb').Server;
    var BSON = require('mongodb').BSON;
    var ObjectID = require('mongodb').ObjectID;

    //res.write('pre open conn');

    db= new Db('innovation-day-nodejs', new Server('localhost', 27017, {auto_reconnect: true}, {}));
    db.open(function(){});

    //res.write('opened conn');

    var messages = db.collection('message', function(error, message_collection) {
       res.send(message_collection);
    });

    //res.send([{ first : 'hist' }]);
    res.end();
});

app.listen(3000);
