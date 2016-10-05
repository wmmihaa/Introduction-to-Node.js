# Introduction to Node.js
# HOL3 – Building API’s using Node.js
## Description
In this lab you are going to build a Web API providing a RESTful interface to the *products* collection. To do this you’re going to use an NPM package called **express** which is one of the most commonly used web frameworks. We are going to cover more about **express** in the next module, but in this module we’re going to cover the basics.
## Setup
* Continue with HOL1
* Navigate to https://www.npmjs.com/
* Search for colors, and select the first one (from marak)
* Read through the **Usage** section
* Open a command prompt from VS Code by hitting CTRL+Shift+C
* Type **npm install colors --save**
* In VS Code, note that the package has been imported to the **nodes_modules** folder
* In VS Code, open the *package.json* file and note that the *dependencies* section has been updated with the installed package

## Exercise
In the *index.js* file, go through all outputs (*console.log*) and set an appropriate color. 

###Tip
To avoid having to set the color on each segment of outputted text (*Eg “Hello “ + name + “!”*), assemble the whole string into one variable and set the color on the variable.
