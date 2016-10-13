# Introduction to Node.js
# HOL3 – Building API’s using Node.js
## Description
In this lab you are going to build a Web API providing a RESTful interface to a static *products* collection. To do this you’re going to use an NPM package called **express** which is one of the most commonly used web frameworks. We are going to cover more about **express** in the next module, but in this module we’re going to cover the basics.
## Setup
* Create a new file called **hol3.js**
* Open a command prompt from VS Code by hitting **CTRL+Shift+C**
* Import package dependancies by typing **npm install express body-parser --save**

## Before you begin
As explained earlier, **express** is a web server framework provided through NPM. You will use **express** to create a web application that will listen for incoming requests. This can easily be done by:
### 1.	Create the web application
```js
var express = require('express');
var app = express();
```
### 2.	Tell the web application to listen for some input:
```js
app.get('/', function (req, res) {
    res.send('<h1>Welcome to HOL #3</h1>')
});
```
### 3.	Set the app to listen on a port:
```js
app.listen(8080);
```
Try it out by opening a console using **CTRL+Shift+C** and type **node hol3.js**. Next, open a browser and navigate to [http://localhost:8080](http://localhost:8080).

In the next module, we’re going to look into all this in more depth, but for now this is all we need to get started.

When you're done, hot **CTRL+C** to stop it.

## Exercise
Before we beging, we need some data. For now, we'll just use a static collection of products:
```js
var products = [
    {id:1, name:"Fazer Kexchoklad", price:12.4},
    {id:2, name:"Snickers", price:8.2},
    {id:3, name:"Dajm", price:19.0}
];
```
Copy the segment above after the initial declarations in the hol3.js file.

### Add a request handler to query for all products
You already have one request handler listening to the root of your site. This one was called when you browsed to localhost:8080. To prove this, set a breakpoint inside the *get* handler and start the application using VS Code (F5). Refresh the browser and examine the **req** and **res** objects.

We are now ready to add another event handler. This handler is going to listen to http://localhost:8080**/products** and return all products in the **products** collection. 

Copy the existing handler and change the uri to match the expected request.
Next, use the response object (*res*) to send back the entire **products** collection.

#### Try it out
This time try it out using **Postman**. Open Postman and type *http://localhost:8080/products* into the address field, and hit *Send*.

### Add a request handler to query for a specific product
This time we’re going to let the user query a specific product by adding a *query parameter*. Since the uri to this call endpoint is the same as the one we just created, we need to update it to support a request like *http://localhost:8080/products?id=3* but still handle *http://localhost:8080/products*. 
Update the callback function by checking if the query exists by using the **req.query.id**:
```js
if (req.query.id) {
    // return single product
}
else {
    // return all products
    res.send(products);
}
```
To query for a single item from a collection, you can use this syntax:
```js
var wanted = items.filter(function (item)
{
    return (item.age == 18);
});
```
Use a the same approach to find the matching product.

#### Try it out
Again, use Postman to verify that you can query using http://localhost:8080/products?id=3.

### Add a request handler to add a new product
To add an item using REST you should use the **POST** verb. And just as the *app* object has **get** function, it also has a **post** function. 
Start by adding another handler, but this time handling post request. As we’re still working with products, we should keep the URI the same.
#### Handling POST operations
POST operations are handled differently than GET (and DELETE) operations in that it needs to receive a payload (a product in our case). The payload can be accessed through the req.**body** field, but we’d still run into format issues, where express can’t parse the inbound JSON body. To resolve this, add the following lines after the declaration of the **app** object (line 3).

```js
var bodyParser   = require('body-parser');
// to support JSON-encoded request bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
```
To add the body to the products collection, use the **.push** function on the collection, eg.
```js
contacts.push(johnSmith);
```
Use the **res.send** to return the number of products in the collection, eg.
```js
res.send({count:products.length});
```

#### Try it out
Using Postman, change the VERB from GET to **POST** and remove the query from the URI (*"?id=2"*). Set the body to:
```js
{
    "id": 4,
    "name": "Fransk norgat",
    "price": 8.2
}
```
**IMPORTANT!** We also need to add a *Content Type* header. Click the *Header* tab in Postman. Set the *key* to "**Content-Type**" and the value to "**application/json**".

Hit **Send**, and verify that your response indicates the increased number of products. Change the VERB back to GET and make another request to receive all products of the collection (now four). 

### Optional 1
Quering for a product that doesn't exist will cause an exception. Update the GET handler to respond with status code 404:
```js
res.status(404).send('Product not found');
```
### Optional 2
Add a DELETE handler 
