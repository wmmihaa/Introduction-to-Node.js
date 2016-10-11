


(function (controllers){
    var homeController = require("./homeController");
    var productsController = require("./productsController");    
    
    controllers.init = function (app){
        homeController.init(app);
        productsController.init(app);
    };
})(module.exports);