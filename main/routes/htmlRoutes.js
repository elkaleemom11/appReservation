var path = require('path');


module.exports = function (app) {


    // Basic route that sends the user first to the AJAX Page
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/make", function (req, res) {
        res.sendFile(path.join(__dirname, "make.html"));
    });

    // Displays all reservations
    app.get("/api/view", function (req, res) {
        return res.json(view);
    });
}