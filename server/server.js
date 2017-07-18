const path = require('path');
const express = require('express');

var app = express();
var port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log('Server is listenning at port', port);
});