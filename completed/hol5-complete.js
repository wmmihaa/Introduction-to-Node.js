var express = require('express');
var app = express();
var bodyParser   = require('body-parser');
var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/mydb2"
var products;

mongoDb.MongoClient.connect(url, function(err,db){
     products = db.collection("products");
});

// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var html = '<body style="background:bisque"><h1>Welcome to HOL #3</h1></body>';
    res.send(html)
});

app.get("/products", function(req,res){
    if(req.query.id){
        var id = Number(req.query.id);
        products.findOne( {id:id}, function(err, document) {
            if(err){
                res.status(400).send(err);
            }
            else if(document===null){
                res.status(403).send("Not found");
            }
            else{
                res.send(document);
            }
        });
    }
    else{
        products.find().toArray(function(err, docs){
            res.send(docs);
        });
        
    }

})
app.post("/products", function(req,res){
    products.insert(req.body, function (err, ret) {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.send(ret);
        }
    });
})

//var wanted = items.filter( function(item){return (item.age==18);} );

app.listen(8080);
