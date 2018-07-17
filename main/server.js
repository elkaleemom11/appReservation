// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;

// Sets up the Express App
// =============================================================
app.get('/', function (req, res) {
    res.send("hello world");
})



// parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.write("you posted:\n")
    res.end(JSON.stringify(req.body, nul, 2))
})

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


// Mark's code
// var app = express();
// var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// // Data:
// require("./dataTables/data");

// // Routes
// // =============================================================
// // Routes to other JavaScript files:  

// require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });
