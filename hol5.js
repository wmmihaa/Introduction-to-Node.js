var express = require('express');
var app = express();
var bodyParser   = require('body-parser');
var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/mydb"
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
        var response = products.filter( function(product){return (product.id==req.query.id);} );
        res.send(response);
    }
    else{
        products.find({id :3 }, function(err, document) {
            res.send(document);
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