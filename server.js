var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'root route' to listen on the default url path
app.get("/", (req, res) => {
    res.send(`<h2>Hello World!</h2>
    <a href="/about">About</a>`);
});

// setup a route to listen on the '/about' url path
app.get("/about", (req, res) => {
    res.json({course: "WEB322", section: "ZAA", task: "In-class Assignment 1"});
});


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
