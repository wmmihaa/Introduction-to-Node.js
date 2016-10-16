# Introduction to Node.js
# HOL7 – Building an MVC web site using Node.js
## Description
In this lab you are going to work with an MVC web site using **express**, **mongodb** and **vash**. You will learn about *controller*, *views* and *API’s* and how to structure an MVC application using Node.js.
When you’re done, you’ll be displaying a graph showing the average temperatures per minute. If you have stopped your IoT node, start it up again so that you’ll have some data to display at the end of the lab.

## Setup
* In Visual Studio Code click *File* -> *Open Folder...*, browse to the **Introduction-to-Node.js\hol7 folder** and click *Select*.
* Open a command prompt/terminal and type **npm express mongodb vash --save**

## Familiarize yourself with the project
For this exercise we begin with an existing site that has been created for you. In VS Code, start by hitting **F5** and browse to [http://localhost:3000]( http://localhost:3000) to make sure the site is working.

### Resources
#### /server.js
This is the starting point of the project. Note that this is where we set the view engine.
```js
app.set("view engine", "vash");
```
Also, note the reference to the **controllers** object in the beginning of the page, and later the call to the *init* function .
```js
controllers.init(app);
```
The *controllers* object is a special controller where we initilize the other two controlles (*home* and *product*). Open the **controllers** folder and click on the **index.js** file to see the *controllers* object.

#### ./controllers/homeController.js
As you could see in the *./controllers/index.js* file, it starts up two other controllers and call their *init* function. Open the **homeController**, and examine its content.

Inside the **init** function we see an **app.get()** call that should look familiar to you, part from the fact that we call the **render function** rather than the **send** as we did in lab 4. The *render* function uses the view engine to forward the response to a view along with the data.
```js
res.render("home/index", {title:""});
```
#### ./controllers/productsController.js
The **productsController** is similar to the *homeController*, part from that it has a different *URI* and returns data. - Which brings us to the *data* object…

#### ./data/index.js
The **data** object is a function that is handling all data operations. As you can see there is the commonly used array of assorted confectionery.
The *data* object also has a function returning all products called **getProducts**, which was called from the *productsController*.
#### ./view/layout.vash
This is our main view. Every other view will be displayed INSIDE this view. This is not an HTML course so we won’t cover the details of the content, But take a note of the **block** call in the middle of the page:
```js
<div>@html.block("body")</div>
``` 
This call fetching the content from the specified view.
#### ./view/products/index.vash
There are currently two controllers and two views. The first view is in the *./views/home/index.vash*, but there is nothing really interesting to observe there. Instead we’ll jump strait over to **./views/products/index.vash**.

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
4. Update the ./controllers/index.js to include the new controller
5. Create a new view called **temperatures**

### Update data helper object
This time we’re going to use MongoDb, so we need to add references to the package. Open the **./data/index.js** file, and add the following at the very top of the document:
```js
var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/local"
var temperatures;
```
Next, begin the function with connecting to the database and set the *temperatures* collection (paste it after ```(function (data){… ```):
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

[Here](http://jonsadka.com/blog/how-to-generate-time-series-week-over-week-year-over-year-etc-aggregations-in-mongodb-using-unix-epoch-timestamps-tutorial-and-example/) is a good post if you want to know more about aggregates and MongoDB.

Step one complete, let’s build the controller.

### Create Controller
In the *controllers* folder, add a new file called **temperaturesController.js** and copy the content below:
```js
(function (temperaturesController){
    var data = require("../data");
    temperaturesController.init = function (app){        
        
        app.get("/temperatures", function(req,res){
            res.render("temperatures/index", {title:"Temperatures"});
        });

    };
})(module.exports); 
``` 
As you can see, this controller is not doing much except passing the title of the page to the view engine. The reason for this is that the chart object is built up by **client side** JavaScript after view engine has rendered the page.

The way to get around this, is to provide yet another function in the controller which can be called from the view after the page has loaded. Add the section below after the existing handler:
```js
        app.get("/temperatures/aggregates", function(req,res){
            data.getAggregates(function(err, readings){
                res.send({errors: err, readings: readings});
            });
        });
```
This handler calls the **getAggregates** function of the data helper object that you created earlier. And different from the first hander, it does not render the response through the view engine. This is because this is a Web API, very similar to the one you created in lab 5.

### Update controllers
Before we create the view we need to update the **./controllers/index.js** file to include our newly created **temperaturesController**.
Open the file and add the controller and call the *init* function just like the other two existing controllers do.

### Create View
You are almost done ;)

1. In the *views* folder, create a new folder called “**temperatures**”. 
2. Copy the the **./views/home/index.vash** and paste it into the new *temperatures* folder.
3. Remove the existing **div** tag (and it's content) and replace it with:
```html
<div class="container-fluid gridContainer">
      <div id="chart-container"></div>
</div>
```
*The "chart-container" div is a place holder for our chart.*

#### Scripts (client side)
Although it’s nice to use the same language (JavaScript) on both server side and client side, it can sometimes be confusing…
After the *div* tag you just added, add the **script** section below:
```html
   <script>
        
        (function init(){
         
        })();

   </script>
```
This function is going to be executed after the page has been renderd, and is the place where you'll add the logic to call the API.

The chart library we’re going to use is called *FusionChart*. And as with any other charts we need to configure it with things like *title*, *colors*, *axixs names* etc, etc… All this is done in a *data source* we call “**ds**”:
```js
var ds = {"chart": {
            "caption": "Temperatures/hour",
            "xAxisName": "Hour",
            "yAxisName": "Temeratures",
            "paletteColors": "#5de40b",
            "bgColor": "#ffffff",
            "showXAxisLine": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "showValues": "1",
            "decimals": "2",
        },
        "data": []
    };
```
Copy the declaration above into the **init** function.
The last step is to call our controller. This is done using the JQuery **get** function:
```js
$.get('./temperatures/aggregates', function(data){
    
    ds.data = data.readings;

    FusionCharts.ready(function () {
        var salesChart = new FusionCharts({
            type: 'area2d',
            renderAt: 'chart-container',
            width: '100%',
            height: '300',
            dataFormat: 'json',
            dataSource: ds
        })
        .render();
    });

});
```
Note that the **get** function calls the **temperatures/aggregates** API function you added to the *temperaturesController*, and that it has a callback with the response.
When the callback is executed, we set the *data* property of the chart data source, and call the *FusionCharts.ready* function to render the chart for us.

## Try it out
Browse to [http://localhost:3000/ temperatures](http://localhost:3000/ temperatures) to see if it worked.
