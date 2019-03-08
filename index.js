var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/ftp', express.static(__dirname + '/public'), serveIndex('public', { 'icons': true }))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


