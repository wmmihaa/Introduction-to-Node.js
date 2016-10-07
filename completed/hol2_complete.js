'use strict'
require('colors');

const VAT = 0.2;
const PRODUCTS = [
    {id:1, name:"Fazer Kexchoklad", price:12.4},
    {id:2, name:"Snickers", price:8.2},
    {id:3, name:"Dajm", price:19.0}
]

var accountBalance = 10;

function buy(product, callback){
    var tax = calculateVAT(product.price);
    try{
        withdraw(product.price);
        var m = "You bought a "+ product.name +" for " + product.price+ " SEK";
        console.log(m.green);
        var t = "VAT: " + tax.toFixed(2) + " SEK";
        console.log(t.grey);
        callback();
    }
    catch(err){
        callback(err);
    }    
}
function calculateVAT(amount){
    return amount * VAT;
}
function withdraw(amount){
    if(amount > accountBalance){
        throw "Insufficient funds."
    }
    accountBalance -= amount;
    
}

buy(PRODUCTS[1],function(err){
    if(err){
        console.log(err.red);
    }
    else{
        var msg = "You balance is " + accountBalance.toFixed(2) + " SEK";
        console.log(msg.green);
    }
});

// Expected output:
// You bought a Snickers for 8.2 SEK
// VAT: 1.64 SEK
// You balance is 91.8 SEK
