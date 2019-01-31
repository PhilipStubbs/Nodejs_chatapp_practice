var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	users = {};

server.listen(3000);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
	socket.on('new user', function(data, callback) {
		if (data in users)
		{
			callback(false);
		}
		else
		{
			callback(true);
			socket.nickname = data;
			users[socket.nickname] = socket;
			// io.sockets.emit('usernames', nicknames);
			updateNicknames();
		}
	});

	function updateNicknames(){
		io.sockets.emit('usernames', Object.keys(users));
	}

	socket.on('send message', function(data, callback) {
		var msg = data.trim();
		console.log(socket.nickname);
		if (msg.substr(0,3) === '/w ' || msg.substr(0,3) === "\\w ")
		{
			msg = msg.substr(3);
			var ind = msg.indexOf(' ');
			if (ind !== -1){
				var name = msg.substring(0, ind);
				var msg = msg.substring(ind +1);
				if(name in users){
					console.log("Whisper");
					users[name].emit('whisper', {msg : msg, nick : socket.nickname});
					users[socket.nickname].emit('whisper', {msg : msg, nick : socket.nickname});
				}
				else
				{
					callback("Error! enter a vaild User");
				}
				
			}
			else
			{
				callback("Error! enter a message");
			}
		
		}
		else
		{
		io.sockets.emit('new message', {msg : data, nick : socket.nickname});
		}
	});

	

	socket.on('disconnect', function(data)
	{
		if (!socket.nickname) 
		{
			return;
		}
		delete users[socket.nickname];
		updateNicknames();
	})

});



// https://www.youtube.com/watch?v=pNKNYLv2BpQ