global.inData = '';
var http = require('http');
sys = require("util");

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/innovation-day-nodejs");

var messageSchema = new Schema({
    title  :  { type: String }, 
    body  :  { type: String }, 
    sender   :  { type: String },
    recipient : { type: String }, 
    senttimestamp  :  { type: Date }
});


mongoose.model('messages', messageSchema);

http.createServer(function (request, response) {
        
        if (request.url === '/favicon.ico') {
            response.writeHead(200, {'Content-Type': 'image/x-icon'} );
            response.end();
            //console.log('favicon requested');
            return;
        }

        response.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });

        var Message = mongoose.model('messages');
        
        Message.find({}, function (err, messages){
          
            if(err)
                throw(err);

            console.log("count:" + messages.length);
            
            var jsonMessages = JSON.stringify(messages);
            console.log(jsonMessages);
            response.end(jsonMessages);
        });

}).listen(8080);

console.log('Server running at:8080');