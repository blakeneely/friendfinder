// Set up requirements
var path = require("path");

// Set up paths for export to server.js
module.exports = function(app){
    app.get("/survey",function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    // failsafe defaults any route not predefined

    // app.use(function(req,res){
    //     res.sendFile(path.join(__dirname + "/../public/home.html"));
    // });

    // app.get("*", function(req, res){
    //     res.sendFile(path.join(__dirname + "/../public/home.html"));
    // });
};