# Introduction to Node.js
# HOL1 – Hello World
## Description
This lab is about getting you comfortable with JavaScript. We assume you have some fundamental programming skills, and the focus will on understanding *anonymous functions* in JavaScript.
In this lab you will create a function to buy a product and withdraw the price from an account balance. You’ll be given an existing script as a starting point.
## Setup
* Create a folder and name it *Introduction to Node.js*
* Open a command prompt and navigate to the folder
* Type ”npm init” and answer all questions by hitting [enter]
* Type ”code [your folder] hol1.js”
* Navigate to [hol1.js]( https://github.com/wmmihaa/Introduction-to-Node.js/blob/master/documentation/hol1.js) and copy the content to your hol1.js file

## Exercise
The recommended way to go about this lab is from the top down, starting with the **withDraw** function, then the **calculateVAT** function and finish up with the **buy** function. __Each function has comments about what is expected to be done.__
## Running the script
To run the sample, open a command prompt/terminal and navigate to the directory you created in the beginning of the exercise. Type **node hol1.js**.
If all goes well, you should see an output like this:

**You bought a Snickers for 8.20 SEK**  
**VAT: 1.64 SEK**  
**Your balance is 91.80 SEK**  

## Debugging
Sometimes we need debugging our code by setting breakpoints and evaluate values of variables and more. Fortunately, Visual Studio Code is our friend. Set a breakpoint in your code and hit F5 to start debugging. The first time you debug an application Visual Studio Code will prompt you to set the platform. Select **Node.js** and you should be good to go.

## "I want more"
Some people (no names) are not comfortable concatinating string using the **"+"** sign. To avoid this you might consider prototyping the *String* object with a **format** function:

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
"{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
```
