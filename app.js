var express = require('express'),  
app = express();//4 beyond .createServer
server = require('http').createServer(app),
io = require('socket.io').listen(server);//SOCKETIO LISTEN THE HTTP SERVER  
//var redis = require('socket.io-redis');
//io.adapter(redis({ host: 'localhost', port: 6379 }));

server.listen(3000);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');

});



io.on('connection', function(socket){
    socket.on('disconnect', function(){ });
  });  

//receive the event on server side
io.on('connection', function(socket){//client connect to socketio application
    //connection .....event
    socket.on('send message', function(data){//use same namein html.. ie<send message> to receive event data
        //send message pass to (data) 
        io.emit('new message', data);//sent data as new message
    });
});


