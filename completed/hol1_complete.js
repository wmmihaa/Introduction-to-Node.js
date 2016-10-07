'use strict'

const VAT = 0.2;
const PRODUCTS = [
    {id:1, name:"Fazer Kexchoklad", price:12.4},
    {id:2, name:"Snickers", price:8.2},
    {id:3, name:"Dajm", price:19.0}
]

var accountBalance = 10;

function buy(product, callback){
    var tax = calculateVAT(product.price);
    withdraw(product.price, function(err){
        if(err){
            callback(err);
        }
        else{
            console.log("You bought a "+ product.name +" for " + product.price+ " SEK");
            console.log("VAT: " + tax.toFixed(2) + " SEK");
            callback();
        }
    });
}
function calculateVAT(amount){
    return amount * VAT;
}
function withdraw(amount, callback){
    if(amount > accountBalance){
        callback("Insufficient funds.");
    }
    else{
        accountBalance -= amount;
        callback();
    }
}

buy(PRODUCTS[1],function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("You balance is " + accountBalance.toFixed(2) + " SEK");
    }
});

// Expected output:
// You bought a Snickers for 8.2 SEK
// VAT: 1.64 SEK
// You balance is 91.8 SEK
