# Introduction to Node.js
# HOL5 – Working with data
## Description
MongoDB is one of the most commonly used databases for Node.js, and during this lab we are going to move the static **products** collection to one in MongoDB. Preceding this exercise, you should have MongoDB installed, but before we start you’ll need to do some setup.
## Before you begin
* Create a folder called *MongoDBLab*
* Open the MongoDB installation folder and browse the bin folder (*C:\Program Files\MongoDB\Server\3.2\bin on Windows*)
* Copy all files to the folder you created in step 1
* In the *MongoDBLab* folder, create a new directory called data.
* Open a console/terminal and browse to the *MongoDBLab* folder
* Type **mongod -dbpath ./data --httpinterface –rest** and hit ENTER

You should now have MongoDB server started and you should be able to browse to http://localhost:28017/ using your favorite browser.

## Exercise 
1. Create a new file called *hol5.js* and copy the entire content from *hol3.js*
2. Remove the declaration of the *products* collection and add:
```js
var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/hol5Db"
var products;
```
### Create the database connection
Continue by adding the section below:
```js
mongoDb.MongoClient.connect(url, function(err,db){
     products = db.collection("products");
});
```
This statement creates a database called **hol5Db** (if it doesn't exist). After successfully connected, it will create a collection called "**Products**".

### Update all operations
We are now ready to update the **GET** and **POST** operations to use the newly created collection. Remember that you should still respond the same way you did before…
####To insert a product to a collection, use this syntax:
```js
collection.insert(req.body, function (err, ret) {  
 // …
});
```

####To query for **all** products use this syntax:
```js
collection.find().toArray(function(err, items){
   // …
});
```
####To query for a single instance use this syntax:
```js
collection.findOne( {id:id}, function(err, item) {
   // …
});
```
**Note** *{id:id}* is the query you'll use.

**Hint:** The incoming query parameter is a string, which you’ll need to convert using the *Number()* function. 
 
## Try it out
Use Postman as you did in Hol3.

## Optional
Update your unit test to work with the new data.Don't forget to update the require statement at the top to use *hol5.js*
