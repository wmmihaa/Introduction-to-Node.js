# Introduction to Node.js
# HOL1 – Getting started with JavaScript
## Description
This lab is about getting you comfortable with JavaScript. We assume you have some fundamental programming skills, and the focus will be on understanding *callbacks* and *anonymous functions* in JavaScript.

In this lab you will create a function to buy a product and withdraw the price from an account balance. You’ll be given an existing script as a starting point.
## Setup
* Create a folder and name it **"Introduction to Node.js"**
* Open a command prompt and navigate to the folder
* Clone this repo into the folder
```
git clone https://github.com/wmmihaa/Introduction-to-Node.js.git
```
* Create another folder inside the *Introduction to Node.js* folder and name it **"labs"**.
* Change the directory to the *labs* folder and type ”npm init” and answer all questions by hitting **Enter**
* Open Visual Studio Code and navigate to the folder using the file menu.
* Navigate to [hol1.js](https://github.com/wmmihaa/Introduction-to-Node.js/blob/master/start/hol1.js) and copy the **hol1.js** file into your *labs* forlder.

## Exercise
For this lab, you are going to implement three functions and it's recommended to go about this by implementing the functions from the top down, starting with the **withDraw** function, then the **calculateVAT** function and finish up with the **buy** function. __Each function has comments about what is expected to be done.__ Brackets "[]" are used in the comments to refer to fields and paramaters.
## Running the script
To run the sample, open a command prompt/terminal from Visual Studio Code by using (**CTRL+Shift+C**) Type **node hol1.js**.
If all goes well, you should see an output like this:

**You bought a Snickers for $2.5**  
**VAT: $0.5**  
**Your balance is $0.5**  

## Debugging
Sometimes we need to debug our code by setting breakpoints and evaluate values of variables and more. Fortunately, Visual Studio Code is our friend. Set a breakpoint in your code and hit F5 to start debugging. The first time you debug an application, Visual Studio Code will prompt you to set the platform. Select **Node.js**, close the *launch.js* and hit **F5** again.

## "I want more"
Some people (no names) are not comfortable concatenating strings using the **"+"** sign. To avoid this you might consider prototyping the *String* object with a **format** function:

```js
   String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
```
**Usage:**
```js
"Introduction to {0}".format("Node.js")
```
