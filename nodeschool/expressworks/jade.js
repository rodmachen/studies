var express = require('express');
app = express();

app.get('/home', function(req, res) {
  res.end('Hello World!\n');
});

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'templates'));

app.set('view engine', 'jade');

res.render('index', {date: new Date().toDateString()})

app.listen(process.argv[2]);
