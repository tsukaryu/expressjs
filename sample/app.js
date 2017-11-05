var express = require('express'),
        bodyParser = require('body-parser'),
        methodOverride = require('method-override',)
        app = express(),
	post = require('./routes/post.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

//routing

app.param('pid', function(req, res, next, pid){
	var players = ['player1', 'player2', 'player3', 'player4'];
	req.params.playername = players[pid];
	next();
});

app.get('/', post.login);
app.get('/login', post.login);
app.post('/main', post.main);
app.listen(3000);
console.log("server starting...");
