// <!-- <script>


var socket = io.connect("http://localhost:3000");
	nickForm = document.getElementById("setNick");
	nickError = document.getElementById("nickError");
	nickBox = document.getElementById("nickname");
	users = document.getElementById("users");
	messageForm = document.getElementById("send-message");
	messageBox = document.getElementById("message");
	chat = document.getElementById("chat");

	nickForm.addEventListerner("submit", function(e){
		e.preventDefualt();
	});




// 	$nickForm.submit(function(e){
// 		e.preventDefault();
// 		socket.emit('new user', $nickBox.val(), function(data){
// 			if (data)
// 			{
// 				$('#nickWrap').hide();
// 				$('#contentWrap').show();
// 			}
// 			else
// 			{
// 				$nickError.html("That username Already Taken");
// 			}
// 		});
// 		$nickBox.val('');
// 	});

// 	socket.on('usernames', function(data){
// 		// var html = '';
// 		// for(i=0; i < data.length; i++)
// 		// {
// 		// 	html += data[i] + '<br/>';
// 		// }
// 		// $users.html(html);
// 		$users.html(data.join("<br/>") ); 
// 	});


// 	$messageForm.submit(function(e) {
// 		e.preventDefault();
// 		socket.emit('send message', $messageBox.val(), function(data){
// 			$chat.append( "<span class='error'><b>" + data + "</span><br/>")
// 			console.log(data);
// 		});
// 		$messageBox.val('');
// 	});

// 	socket.on('new message', function(data)
// 	{
// 		$chat.append( "<span class='msg'><b>" + data.nick + " </b>: " + data.msg + "</span><br/>")
// 	});

// 	socket.on('whisper', function(data) {
// 		$chat.append( "<span class='whisper'><b>" + data.nick + " </b>: " + data.msg + "</span><br/>")
// 	});
// });

// </script> -->