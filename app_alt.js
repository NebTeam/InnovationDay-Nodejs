global.inData = '';
var http = require('http');
sys = require("util");

/* set up DB */

var Db = require('./node-mongodb-native/lib/mongodb').Db,
  Connection = require('./node-mongodb-native/lib/mongodb').Connection,
  Server = require('./node-mongodb-native/lib/mongodb').Server,
  BSON = require('./node-mongodb-native/lib/mongodb').BSONNative;

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;
var db = new Db('innovation-day-nodejs', new Server(host, port, {}), {native_parser:true});

http.createServer(function (request, response) {
    db.open(function(err, db) { 
            
        response.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
        //output = { name: "Danny Douglass"};
        //body = JSON.stringify(output);

        var body = [];
        db.collection('message', function(err, collection) {
            collection.count(function(err, count) {
                console.log("totalMessages: " + count);
                body.push({totalMessages: count});
            })
        });

        response.end(JSON.stringify(body));   

    }); 
}).listen(8080);

console.log('Server running at whatever host :8080');