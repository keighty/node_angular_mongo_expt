var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simple');

var personSchema = {
  firstName: String,
  lastName: String,
  favouriteFruit: String
}

var Person = mongoose.model('Person', personSchema, 'people');

// serve a collection
var app = express();
app.get('/', function(req, res) {
  Person.find(function(err, doc) {
    res.send(doc);
  });
});
app.use('/basic', express.static(__dirname + '/basic'));

// serve a static page
app.use('/hello', express.static(__dirname + '/hello'));

app.listen(3030);