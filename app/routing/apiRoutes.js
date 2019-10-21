// Set up requirements
var friends = require("../data/friends.js");

// Set up path for export to server.js
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var match = {
            name: "",
            photo: "",
            difference: 1000        // Set high for so added scores don't go over
        };

        console.log(req.body);

        // Parse user POST data
        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores);

        // Create variable to hold score
        var totalDiff = 0;

        // Loop through scores array and compare scores for each friend (run nested loops)
        for(var i = 0; i < friends.length; i++){
            console.log(friends[i]);
            // Reset totalDiff back to 0 for each loop
            totalDiff = 0;
            for(var j = 0; j < friends[i].scores[j].length; j++){
                // Get scores by getting absulte value (removes negative) different of friendScores from userScores
                totalDiff += Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j])));
                // If difference is close (totalDiff is less than match.Difference) assign friends[i] info to match object for pushing
                if(totalDiff <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDiff;
                }
            }
        }
        // Push user data to array last (if done first the nested loops will compare their own answers to themselves)
        friends.push(userData);
        // Return json match object to use with html
        res.json(match);
    });
};