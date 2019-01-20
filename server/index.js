const express = require('express');
const path = require('path');
const opn = require('opn');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// An api endpoint that returns a short list of items
app.get('/api/movies', (req,res) => {
  var list = require('./../data/movies');
  res.json(list);
  console.log('Sent list of items');
});

// An api endpoint that returns a short list of items
app.get('/api/genres', (req,res) => {
  var list = require('./../data/genres');
  res.json(list);
  console.log('Sent list of items');
});

// An api endpoint that returns a short list of items
app.get('/api/genres', (req,res) => {
  var list = require('./../data/users');
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

opn('http://localhost:' + port);

console.log('App is listening on port ' + port);