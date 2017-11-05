var express = require('express'),
	app = express();
app.use(express.static(__dirname + '/public/'));
app.get('/hello.txt', function(req, res) {
	res.send("hello fs");
});
app.listen(3000);
console.log("server starting...");
