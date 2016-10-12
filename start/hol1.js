


'use strict'
const VAT = 0.2;
var products = [
    {id:1, name:"Fazer Kexchoklad", price:12.4},
    {id:2, name:"Snickers", price:8.2},
    {id:3, name:"Dajm", price:19.0}
]

var accountBalance = 10;

function withdraw(amount, callback){
    // If [amount] is more than [accountBalance] use the 
    //   callback function to pass the error message. Eg callback("Insufficient funds.");
    
    // Otherwise withdraw [amount] from [accountBalance] and call the 
    //    callback function with no parameters
}
function calculateVAT(amount){
    // Use the [VAT] constat to calculate the tax from [amount] and return tax.
}
function buy(product, callback){
    // Call the withdraw function passing in the price of [product]
    //   along with an anonymous function Eg function(err){...}

    // Inside the anonymous function check if err is "truesy". If err is "truesy" (error exists)
    //   pass the error back to the caller using the callback function. Eg callback(err)
    
    // If the err is "falsy" (no error), continue by calling the calculateVAT function to
    //   receive the tax.
    // Build up the respose messages using console.log()
    // Expected output:
    // You bought a Snickers for 8.20 SEK
    // VAT: 1.64 SEK

}
buy(products[1], function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Your balance is " + accountBalance.toFixed(2) + " SEK");
    }
});
    // Expected output:
    // You bought a Snickers for 8.20 SEK
    // VAT: 1.64 SEK
    // Your balance is 91.8 SEK 
