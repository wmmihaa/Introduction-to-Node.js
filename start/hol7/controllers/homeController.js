

(function (homeController){

    homeController.init = function (app){        
        app.get("/", function(req,res){
            res.render("home/index", {title:"Home"});
        });
    };
    
})(module.exports);
