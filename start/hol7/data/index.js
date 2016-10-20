
(function (data) {

    var products = [
        { id: 1, name: "Twix", price: 2.9 },
        { id: 2, name: "Snickers", price: 2.5 },
        { id: 3, name: "Daim", price: 3.2 }
    ]

    data.getProducts = function (next) {
        next(null, products);
    };

})(module.exports);