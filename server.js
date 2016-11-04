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

var mcdYes = [{"id":"McDonalds","text":"5"}];
var mcdNo = [{"id":3,"text":"8"}];
var bkYes = [{"id":"Burger King","text":"2"}];
var bkNo = [{"id":3,"text":"6"}];
var domYes = [{"id":"Dominos","text":"7"}];
var domNo = [{"id":3,"text":"3"}];
var phutYes = [{"id":"Pizza Hut","text":"3"}];
var phutNo = [{"id":3,"text":"7"}];
var arbYes = [{"id":"Arbys","text":"3"}];
var arbNo = [{"id":3,"text":"7"}];
var wendYes = [{"id":"wendys","text":"3"}];
var wendNo = [{"id":3,"text":"7"}];

app.get('/wendYes', function(req, res) {
    res.send(wendYes);
});

app.get('/wendNo', function(req, res) {
    res.send(wendNo);
});

app.get('/arbYes', function(req, res) {
    res.send(arbYes);
});

app.get('/arbNo', function(req, res) {
    res.send(arbNo);
});

app.get('/phutYes', function(req, res) {
    res.send(phutYes);
});

app.get('/phutNo', function(req, res) {
    res.send(phutNo);
});

app.get('/domYes', function(req, res) {
    res.send(domYes);
});

app.get('/domNo', function(req, res) {
    res.send(domNo);
});

app.get('/mcdYes', function(req, res) {
    res.send(mcdYes);
});

app.get('/mcdNo', function(req, res) {
    res.send(mcdNo);
});

app.get('/bkYes', function(req, res) {
    res.send(bkYes);
});

app.get('/bkNo', function(req, res) {
    res.send(bkNo);
});

var ingredients = [
    {
        "id": "Burger King",
        "vote": -1
    }
];

app.get('/ingredients', function(req, res) {
    console.log("GET From SERVER");
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {

    ingredients[0].vote++;

    res.status(200).send("Successfully posted ingredient");
});

app.listen(3000);
