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




var bkYes = [{"id": "Burger King","vote": -1}];
var mcdYes = [{"id": "Mcdonalds","vote": -1}];
var domYes = [{"id": "Dominos","vote": -1}];
var phutYes = [{"id": "Pizza Hut","vote": -1}];
var arbyYes = [{"id": "Arbys","vote": -1}];
var wendYes = [{"id": "Wendys","vote": -1}];




app.get('/bkYes', function(req, res) {
    res.send(bkYes);
});
app.get('/mcdYes', function(req, res) {
    res.send(mcdYes);
});
app.get('/domYes', function(req, res) {
    res.send(domYes);
});
app.get('/phutYes', function(req, res) {
    res.send(phutYes);
});
app.get('/arbyYes', function(req, res) {
    res.send(arbyYes);
});
app.get('/wendYes', function(req, res) {
    res.send(wendYes);
});




app.post('/bkYes', function(req, res) {
    bkYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/mcdYes', function(req, res) {
    mcdYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/domYes', function(req, res) {
    domYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/phutYes', function(req, res) {
    phutYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/arbyYes', function(req, res) {
    arbyYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/wendYes', function(req, res) {
    wendYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});

app.listen(3000);
