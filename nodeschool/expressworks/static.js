var path = require('path');
var express = require('express');
app = express();

app.listen(process.argv[2]);

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
