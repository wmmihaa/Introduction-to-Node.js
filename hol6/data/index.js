
(function (data){
    
    var products = [
        {id:1, name:"Fazer Kexchoklad", price:12.4},
        {id:2, name:"Snickers", price:8.2},
        {id:3, name:"Dajm", price:19.0}
    ];

    data.getProducts = function(next){
        next(null, products);
    };
    
})(module.exports);