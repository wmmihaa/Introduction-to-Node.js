# Introduction to Node.js
# HOL7 – Building an MVC web site using Node.js
## Description

## Setup
* In Visual Studio Code click *File* -> *Open Folder...*, browse to the **Introduction-to-Node.js\hol7 folder** and click *Select*.
* Open a command prompt/terminal and type **npm express, mongodb vash --save**

## Familiarize yourself with the project
For this exercise we begin with an existing site that has been created for you. In VS Code, start by hitting **F5** and browse to [http://localhost:3000]( http://localhost:3000) to make sure the site is working.

### /server.js
This is the starting point of the project. Note that the this is where we set the view engine.
```js
app.set("view engine", "vash");
```
Also, note the reference to the **controllers** object in the beginning of the page, and later the call to the *init* function .
```js
controllers.init(app);
```
The *controllers* object is a special controller where we initilize the other two controlles (*home* and *product*). Open the **controllers** folder and click on the **index.js** file to see the *controllers* object.

### ./controllers/homeController.js
As you could see in the *./controllers/index.js* file, it starts up two other controllers and call their *init* function. Open the **homeController**, and examine its content.

Inside the **init** function we see an **app.get()** call that should look familiar to you, part from the fact that we call the **render function** rather than the **send** as we did in lab 4. The *render* function uses the view engine to forward the response to a view along with the data.
```js
res.render("home/index", {title:""});
```
### ./controllers/productsController.js
The **productsController** is similar to the *homeController*, part from that it has a different *URI* and returns data. - Which brings us to the *data* object…

### ./data/index.js
The **data** object is a function that is handling all data operations. As you can see there is the commonly used array of assorted confectionery.
The *data* object also has a function returning all products called **getProducts**, which was called from the *productsController*.
### ./view/layout.vash
This is our main view. Every other view will be displayed INSIDE this view. This is not an HTML course so we won’t cover the details of the content, But take a note of the **block** call in the middle of the page:
```js
<div>@html.block("body")</div>
``` 
This call fetching the content from the specified view.
### ./view/products/index.vash
There are currently two controllers and two views. The first view is in the *./views/home/index.vash*, but there is nothing really interesting to observe there. Instead we’ll jump strait over to ***./views/products/index.vash**.
The first statement (*@html.extend*) tells the view engine (*Vash*) to use the **layout**.vash file as the master page. The second correlates to the **block** statement found in the master page. Inside this statement is where we put the View content.
As described earlier, the caller (the browser) calls the **controller** which forwards its model (the data) to the view. If you examine the content in the view, you’ll see references to "***model***" at several places. **model** is the data passed from the controller.
In the homeController we have:
```js
res.render("home/index", {title:"Home"});
```
This means we can go this in the view:
```html
<h1>@model.title</h1>
```
In the productController we pass the *product* collection to the view, and can therefore iterate over the array:
```html
@model.products.forEach(function(product){
  <div class="row gridRow">
     <div class="col-xs-4 test1 ">@product.name</div>
     <div class="col-xs-3 test2 ">@product.price</div>
  </div>
})
```
## Exercise 
In this lab you are going to add a view to display a diagram over the temperatures you’ve been capturing in lab6. To do this we need to take the following actions:
1. Update the data object with a method to return a temperature aggregare
2. Create a new controller called **temperaturesController**
3. Create an API controller called **apiController**
4. Update the ./controllers/index.js to include the new controller
5. Create a new view called **temperatures**
6. Update the master view with references to *fusioncharts* which is the library we’ll use to display the diagram.

### Update data object
This time we’re going to use MongoDb, so we need to add references to the package. Open the **./data/index.js** file, and add the following at the very top of the document:
```js
var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/local"
var temperatures;
```
Next, begin the function with connecting to the database and set the collection (*temperatures*) (after ```(function (data){… ```):
```js
mongoDb.MongoClient.connect(url, function(err,db){
        temperatures = db.collection("temperatures");
    });
```
Last step is to add the **getAggregates** function that the controller is going to call. Add the section below after the **data.getProducts** function:
```js
data.getAggregates = function(callback){
        temperatures.aggregate(
            [
            { $project: { temp:'$temp', "timeSpan": { $add: [new Date(0), "$_dateTime"] } }},
            { $project: { "timestamp": { $minute: "$timeSpan" }, temp:'$temp' } },
            {
                $group: {
                   _id: { minuteRead: "$timestamp" },
                   label : { $avg :"$timestamp" },
                   value : { $avg :"$temp" }
                }
            }
            ],
            function (err, result) {
                callback(err, result);
            }
        );
    };
```
**If this code is a bit overwhelming, don’t worry – this is not a MongoDB course.** In short it’s an aggregation query which will give you the average temperature for every minute.

Step one complete, let’s build the controller.

### Create Controller
In the *controllers* folder, add a new file called **temperaturesController.js**
### Create an API controller
### Update controllers
### Create View
### Update master view


