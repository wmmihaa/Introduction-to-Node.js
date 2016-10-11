var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");


app.set("view engine", "vash");

// Map the routes
controllers.init(app);

// Allow browsing static resourses such as styles
app.use("/styles", express.static(__dirname + '/styles'));

var server = http.createServer(app);
server.listen(3000);


