var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override',)
	app = express(),
	post = require('./routes/post.js');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//routing
app.get('/', post.index);
app.get('/posts/:id', post.show);
/*
app.get('/posts/new.js', post.new);
app.post('/posts/create.js', post.create);
app.get('/posts/:id/edit.js', post.edit);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);
*/

app.listen(3000);
console.log("server starting...");
