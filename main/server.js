// Dependencies
// =============================================================
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require("./routes/htmlRoutes.js")(app);

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
