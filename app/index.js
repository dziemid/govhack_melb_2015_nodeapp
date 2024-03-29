var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
   socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('user_click', function(msg){
    console.log('message: ' + msg);
     console.log(msg);
     socket.broadcast.emit('user_click', msg);
  }); 
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});