var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var app = express();

//mongoose.Promise = global.Promise; //not quite sure what this does
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


var usersSchema = new Schema({
//  _id: String,
  id: String,
  vote: Number
});

var bkyes = mongoose.model('bkyes', usersSchema);
var mcdyes = mongoose.model('mcdyes', usersSchema);
var domyes = mongoose.model('domyes', usersSchema);
var phutyes = mongoose.model('phutyes', usersSchema);
var arbyyes = mongoose.model('arbyyes', usersSchema);
var wendyes = mongoose.model('wendyes', usersSchema);
var chicyes = mongoose.model('chicyes', usersSchema);
var kfcyes = mongoose.model('kfcyes', usersSchema);
var subyes = mongoose.model('subyes', usersSchema);
var jimyes = mongoose.model('jimyes', usersSchema);



app.get('/bkyes', function(req, res) {
bkyes.find({}, function(err, bkyes) {
  res.send(bkyes);
  });
});

app.get('/mcdyes', function(req, res) {
mcdyes.find({}, function(err, mcdyes) {
  res.send(mcdyes);
  });
});

app.get('/domyes', function(req, res) {
domyes.find({}, function(err, domyes) {
  res.send(domyes);
  });
});

app.get('/phutyes', function(req, res) {
phutyes.find({}, function(err, phutyes) {
  res.send(phutyes);
  });
});

app.get('/arbyyes', function(req, res) {
arbyyes.find({}, function(err, arbyyes) {
  res.send(arbyyes);
  });
});

app.get('/wendyes', function(req, res) {
wendyes.find({}, function(err, wendyes) {
  res.send(wendyes);
  });
});

app.get('/chicyes', function(req, res) {
chicyes.find({}, function(err, chicyes) {
  res.send(chicyes);
  });
});

app.get('/kfcyes', function(req, res) {
kfcyes.find({}, function(err, kfcyes) {
  res.send(kfcyes);
  });
});

app.get('/subyes', function(req, res) {
subyes.find({}, function(err, subyes) {
  res.send(subyes);
  });
});

app.get('/jimyes', function(req, res) {
jimyes.find({}, function(err, jimyes) {
  res.send(jimyes);
  });
});


app.post('/bkyes', function(req, res, next) {
  bkyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});



app.post('/mcdyes', function(req, res, next) {
  mcdyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/domyes', function(req, res, next) {
  domyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/phutyes', function(req, res, next) {
  phutyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/arbyyes', function(req, res, next) {
  arbyyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/wendyes', function(req, res, next) {
  wendyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/chicyes', function(req, res, next) {
  chicyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/kfcyes', function(req, res, next) {
  kfcyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/subyes', function(req, res, next) {
  subyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});


app.post('/jimyes', function(req, res, next) {
  jimyes.update({$inc: { vote: 1 }})
      .exec(function(err, foundObject) {
      if (err) {
        console.log(err);
    }});
    res.status(200).send();
});

app.listen(3000);
