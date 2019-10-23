// Set up requirements
var express = require("express");
var app = express();

// Set up server port
var PORT = process.env.PORT || 8081;

// Set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to files
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Start server
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});
