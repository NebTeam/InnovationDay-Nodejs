// Module dependencies.
var express = require('express');

var app = express.createServer();

var mongoose = require('mongoose');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

// Configuration
app.configure( function() {
});

var MessageSchema = new Schema({
    sender  :  { type: String, default: 'hahaha' }
  , receiver   :  { type: String, min: 18, index: true }
  , date  :  { type: Date, default: Date.now }
});

// var MessageModel = mongoose.model('Message', MessageSchema);

// Routes
app.get('/', function(req, res) {
    var conn = mongoose.createConnection('mongodb://localhost/innovation-day-nodejs');
    var MessageModel = conn.model('ModelName', MessageSchema);
    var m = new MessageModel;

    m.sender = 'Danny';
    m.receiver = 'Chernacov';
    m.date = new Date();

    m.save(function(e, message) {
        console.log(message);

        // why in the hell doesn't this work?
        MessageModel.find({}).each(function(doc){
            console.log(doc);
        });
    });

    res.end();
});

app.listen(3000);
