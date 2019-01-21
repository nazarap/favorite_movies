const express = require('express');
const path = require('path');
const opn = require('opn');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/movies', (req,res) => {
  let list = require('./../data/movies');
  list = list.slice(1000, 1200);
  res.json(list);
});

app.get('/api/genres', (req,res) => {
  const list = require('./../data/genres');
  res.json(list);
});

app.get('/api/users', (req,res) => {
  const list = require('./../data/users');
  res.json(list);
});

app.get('/api/user', (req,res) => {
  const list = require('./../data/users');
  const user = list.find(user => user.id === +req.query.id);
  res.json({user});
});

app.post('/api/login', (req,res) => {
  const list = require('./../data/users');
  let body = "";
  req.on('data', function (data) {
    body += data;
  });
  req.on('end', function () {
    let body2 = JSON.parse(body)
    let user = list.find(function(user) {
      return user.login === body2.login && user.password === body2.password
    })
    res.json({ user });
  });
});

// Run react app
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

opn('http://localhost:' + port);

console.log('App is listening on port ' + port);