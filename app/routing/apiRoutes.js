// Set up requirements
var friends = require("../data/friends.js");

// Set up path for export to server.js
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
};