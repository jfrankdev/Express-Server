var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/food');

//var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"ham"},{"id":3,"text":"potatoes"}];
var usersSchema = new Schema({
  id: Number,
  ingredient: String
});

mongoose.model('ingredients', usersSchema);

app.get('/ingredients', function(req, res) {
  mongoose.model('ingredients').find({}, function(err, ingredients) {
    res.send(ingredients);
  });
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

app.listen(3000);
