

(function (productsController){

    var data = require("../data");

    productsController.init = function (app){
        
        app.get("/products", function(req,res){
            data.getProducts(function(err, products){
                res.render("products/index", {title:"Products", errors: err, products: products});
            });
        });
    };
})(module.exports);
