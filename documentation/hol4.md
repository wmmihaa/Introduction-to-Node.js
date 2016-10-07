# Introduction to Node.js
# HOL4 – Unit testing
## Description
We are now ready to test the API you created in lab 3. In fact, we could/should have created these tests BEFORE we developed the API. But as it wouldn’t have made much sense from a learning perspective we’ll make the tests after developed the API.
You are now going to make four tests: 

**1. Get all products**  
&nbsp;&nbsp;*should execute without errors*  
&nbsp;&nbsp;*should return an http status 200*  
&nbsp;&nbsp;*should return three items*  

**2. Get product with id = 3**  
&nbsp;&nbsp;*should execute without errors*  
&nbsp;&nbsp;*should return an http status 200*  
&nbsp;&nbsp;*should return "Dajm"*  

**3. Add one product**  
&nbsp;&nbsp;*should execute without errors*  
&nbsp;&nbsp;*should return an http status 200*  

**4. Get all products again**  
&nbsp;&nbsp;*should execute without errors*  
&nbsp;&nbsp;*should return an http status 200*  
&nbsp;&nbsp;*should return four items*  

## Setup
* Use the same project as in previous lag (HOL3)
* Open a command prompt from VS Code by hitting CTRL+Shift+C
* Import package dependencies by typing **npm install mocha,chai --save**
* Open the **package.json** file in VS Code and add a **test** to the **script** section:
```js
  "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec" 
  },
```
## Exercise
### Create the test
* Create a forlder in VS project called **test**
* Add a file called **unittest.js** andopen the file in VS Code

### Import references
In this lab you rare going to use three references:
* **request**&nbsp;&nbsp;Used make the call to the *product* service
* **chai**&nbsp;&nbsp;Used to validate the result
* **hol3.js**&nbsp;&nbsp;Used start the service

```js
var expect = require('chai').expect;
var request = require('request');
require('../hol3.js');
```

### Create your first test
Copy the test description below into your unit test:
```js
describe("Get all products", function () {
    var result; // Used to store the result
    // First we call the service
    before(function (done) {
        // Configure the call with content-type and uri
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:8080/products',
            json: {}
        };
        // Make call
        request.get(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });
        
    });
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
});
```
### Create the other tests
* Copy the whole describe section for each test. 
* Update the options object with uri and json (payload).
* Update the request operation to **post()** and **delete()** (if you’ve implemented it) 
