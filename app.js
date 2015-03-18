var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  //res.send('Hello, World!');
  res.render('index', { title: 'Express Sample' });
});

app.listen(3000);
