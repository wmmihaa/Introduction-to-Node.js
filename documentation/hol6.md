# Introduction to Node.js
# HOL6 – Building an MVC web site using Node.js
## Description

## Setup
* In Visual Studio Code click *File* -> *Open Folder...*, browse to the **Introduction-to-Node.js\hol6 folder** and click *Select*.
* Open a command prompt/terminal and type **npm express, mongodb vash --save**

## Exercise 
For this exercise we begin with an existing site that has been created for you. In VS Code, start by hitting **F5** and browse to [http://localhost:3000]( http://localhost:3000) to make sure the site is working.

For this exercise we begin with an existing site that has been created for you. In VS Code, start by hitting **F5** and browse to [http://localhost:3000]( http://localhost:3000) to make sure the site is working.
### Familiarize yourself with the project
#### /server.js
This is the starting point of the project. Note that the this is where we set the view engine.
```js
app.set("view engine", "vash");
```
Also, note the reference to the **controllers** object in the beginning of the page, and later the call to the *init* function .
```js
controllers.init(app);
```
The *controllers* object is a special controller where we’d manage all the other controller. Open the **controllers** folder and click on the **index.js** file to see the *controllers* object.
#### ./controllers/homeController.js
As you could see in the index.js file, it starts up two other controllers and call their *init* function. Open the **homeController**, and examine its content.
Inside the **init** function is an **app.get()** call that should look familiar to you, part from the fact that we call the **render function** rather than the **send** as we did in lab 4. The *render* function uses the view engine to forward the response to a view with the data.
```js
res.render("home/index", {title:""});
```
#### ./controllers/productsController.js
The **productsController** is similar to the *homeController*, part from that it has a different *URI* and returns data. - Which brings us to the *data* object…
#### ./data/index.js
The **data** object is a function that is handling all data operations. As you can see there is the commonly used array of assorted confectionery.
The *data* object also has a function returning all products called **getProducts**.


