# Introduction to Node.js
# HOL3 – Building API’s using Node.js
## Description
In this lab you are going to build a Web API providing a RESTful interface to the *products* collection. To do this you’re going to use an NPM package called **express** which is one of the most commonly used web frameworks. We are going to cover more about **express** in the next module, but in this module we’re going to cover the basics.
## Setup
* Create a folder and name it HOL3
* Open a command prompt and navigate to the folder
* Type ”npm init” and answer all questions by hitting [enter]
* Type ”code [your folder] index.js”
* Navigate to [hol3.js]( https://github.com/wmmihaa/Introduction-to-Node.js/blob/master/documentation/hol3.js) and copy the content to your index.js file
* Open a command prompt from VS Code by hitting CTRL+Shift+C
* Import package dependancies by typing **npm install express,body-parser --save**

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
In the next module, we’re going to look into all this in more depth, but for now this is all we need to get started.

## Exercise
Once again, some work has already been created for you (you're welcome). Examine the content you passed in to the *index,js* file. Try it out by opening a console using **CTRL+Shift+C** and type **node index.js**. Next, open a browser and navigate to http://localhost:8080.
When you're done, shut it down using **CTRL + C**.

### Add a request handler to query for all products
You already have one request handler listening to the root. This one was called when you browsed to localhost:8080. To prove this, set a breakpoint inside the *get* handler and start the application using VS Code (F5). Refresh the browser and examine the **req** and **res** objects.

We are now ready to add another event handler. This handler is going to listen to http://localhost:8080**/products** and (of course) return all products in the collection. Copy the existing handler and change the uri to match the expected request.
Next, use the response object (*res*) to send back the entire **products** collection.

#### Try it out
This time try it out using **Postman**. Open Postman and type *http://localhost:8080/products* into the address field, and hit *Send*.

### Add a request handler to query for a specific product
This time we’re going to let the user query a specific product by adding a *query parameter*. Since the uri to this call is the same as the one we just created, we need to update it to support a request like *http://localhost:8080/products?id=3*. However we still want to handle calls without query parameters so we’ll have to add a condition.
Start by checking if the query exists by using the **req.query.id**:
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
Use a the same approach to find the matching product


