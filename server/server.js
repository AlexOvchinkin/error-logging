const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/error', function(req, res) {
  console.log(req.body);
  res.status(200).json('ok');
});

app.listen(3000, function() {
  console.log('Server listen on port 3000 ...');
});
