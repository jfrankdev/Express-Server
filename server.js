var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var app = express();

mongoose.Promise = global.Promise; //not quite sure what this does
mongoose.connect('mongodb://localhost:27017/food');


//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




//var bkYes = [{"id": "Burger King","vote": -1}];
var mcdYes = [{"id": "Mcdonalds","vote": -1}];
var domYes = [{"id": "Dominos","vote": -1}];
var phutYes = [{"id": "Pizza Hut","vote": -1}];
var arbyYes = [{"id": "Arbys","vote": -1}];
var wendYes = [{"id": "Wendys","vote": -1}];
var chicYes = [{"id": "Chic Fil A","vote": -1}];
var kfcYes = [{"id": "Kfc","vote": -1}];
var subYes = [{"id": "Subway","vote": -1}];
var jimYes = [{"id": "Jimmy John's","vote": -1}];







/*app.get('/bkYes', function(req, res) {
    res.send(bkYes);
});*/
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
app.get('/chicYes', function(req, res) {
    res.send(chicYes);
});
app.get('/kfcYes', function(req, res) {
    res.send(kfcYes);
});
app.get('/subYes', function(req, res) {
    res.send(subYes);
});
app.get('/jimYes', function(req, res) {
    res.send(jimYes);
});



/*
app.post('/bkYes', function(req, res) {
    bkYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});*/
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
app.post('/chicYes', function(req, res) {
    chicYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/kfcYes', function(req, res) {
    kfcYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/subYes', function(req, res) {
    subYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
app.post('/jimYes', function(req, res) {
    jimYes[0].vote++;
    res.status(200).send("Successfully posted ingredient");
});
/*test
var userDataSchema = new Schema({
  title:  String,
  content: String,
  author: String
}); //{collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

app.post('/bkyes', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  var data = new UserData(item);
console.log(item);
  data.save();
console.log(data);
//  res.redirect('/');
});
*/
//var bkYes = [{"id": "Burger King","vote": -1}];

app.get('/bkYes', function(req, res) {
    res.send(bkYes);
});

var usersSchema = new Schema({
  _id: String,
  id: String,
  vote: Number
//  firstName: String
//  lastName: String
});

var bkyes = mongoose.model('bkyes', usersSchema);


app.get('/bkyes', function(req, res) {
bkyes.find({}, function(err, bkyes) {
  res.send(bkyes);
  //console.log(err);
});
});

app.post('/bkyes', function(req, res, next) {
//Model.findOneAndUpdate(query, { $set: { name: 'jason borne' }})
  bkyes
    .findOneAndUpdate({
      // Conditions
      id: '5'  //must match value in db
    }, {
      $set:{
      // Set which fields to update
      id: 'hello' //the new value to update

    }})
    .exec(function(err, foundObject) {
      if (err) {
        // Error handler here
        console.log(err);

      }



      // Do something when update successfully
    });
});


app.listen(3000);
