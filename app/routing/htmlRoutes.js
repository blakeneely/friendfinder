// Set up requirements
var path = require("path");

// Set up paths for export to server.js
module.exports = function(app){
    app.get("/survey",function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // app.use failsafe defaults any route not predefined above
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};