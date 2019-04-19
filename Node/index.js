const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sellInn', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to MongoDB");// we're connected!
});

var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var productSchema = new mongoose.Schema({
  item:String,
  Age:String,
  descriptions:String,
  link:Array,
  email:String,
  keyword:Array

});

var keywordSchema = new mongoose.Schema({
  name:String
});

var product = mongoose.model('product',productSchema);
var keyword = mongoose.model('keyword',keywordSchema);

// var mylappy = new product({item:'Laptop',
//                             Age:'2 days',
//                             descriptions:'Works fine i guess',
//                             link:['http1','http2','http3','http4'],
//                             email:'ts873',
//                             keyword:['laptop','non-gaming','electronics','desktop']
//                             });

// mylappy.save(function (err, mylappy) {
//     if (err) return console.error(err);
//     console.log(mylappy);
// });

// keyword.find(function (err, keyword) {
//     if (err) return console.error(err);
//     else{
//          res.json(keyword);
//          console.log(keyword);
//         }
// });


app.post('/product',function(req,res){

    var newProduct = new product(req.body);

    newProduct.save(function (err,newProduct){

      if (err)
      {
        return console.error(err);
      }
      else
       {
        console.log(newProduct);
        res.send(newProduct);
      }

    })

    // var newKeyword = new keyword(req.body.keyword
    // keyword.save(
});

app.get('/remove/:id',function(req,res){

    console.log(req.params.id);
    product.remove(
      { _id : req.params.id},(function (err,newProduct){

      if (err)
      {
        return console.error(err);
      }
      else
       {
        console.log(newProduct);
        res.send(newProduct);
      }

    }));
});


app.get('/productByKey/:keys',function(req,res){

  var searchKeys = req.params.keys;
  product.find({
    keyword : {"$all" : searchKeys }
  }).exec(function(err,product){
    if(err)
    console.log(err);
    else
    {

      res.send(product);
      console.log(product);
    }

  });

})

app.get('/productById/:id',function(req,res){

  console.log(req.params.id);
  product.findById(req.params.id)
    .exec(function(err,product){
    if(err)
    console.log(err);
    else
    {
      res.send(product);
      console.log(product);
    }

  });

})

app.get('/products',function(req,res){

  product.find(function (err, product) {
  if (err) return console.error(err);
  else{
    res.json(product);
    console.log(product);
      }
  })
})



app.get('/keywords',function(req,res){

  keyword.find(function (err, keyword) {
      if (err) return console.error(err);
      else{
            res.json(keyword);
            var testVar = keyword;
            console.log(testVar[0]);
          }
  });

})


app.get('/suggestions/:t',function(req,res){
      console.log("here");
      console.log(req.params.t);
  keyword.find({"name": {$regex: '^' + req.params.t, $options: 'i'}}).exec(function (err,keyword){
       if(err) console.log("So an error occured.......");
       else{
         res.json(keyword);
         console.log(keyword);
       }
  });

})

//
// app.get('/keywordsuggestor',function(req,res){
//
//   console.log(keyword.find({"name":/^a/i}).exec(callback));
//
// })




var server = app.listen(PORT, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
});
