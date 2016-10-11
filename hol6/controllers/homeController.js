

(function (homeController){

    var data = require("../data");

    homeController.init = function (app){
        
        app.get("/", function(req,res){
            data.getProducts(function(err, products){
                res.render("home/index", {title:"", errors: err, products: products});
            });
        });
    };
})(module.exports);
