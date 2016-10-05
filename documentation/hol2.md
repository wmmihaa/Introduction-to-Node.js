# Introduction to Node.js
# HOL2 – Working with npm
## Description
In this lab you are going to learn how to work with Node Package Manager (**NPM**). You are going to import the *colors* package and use it make your end-user experience a bit more delightful.
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
