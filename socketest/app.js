var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(1337);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.write(data);
    res.end();
  })
}

io.sockets.on('connection', function(socket){
	var results = [];
	socket.on('emit_from_client', function(data){
		results.push(data.msg);
		socket.client_name =  data.name;
		console.log(results);
		io.sockets.emit('emit_from_server', '['+ socket.client_name + ']' + data.msg);
	});
});
