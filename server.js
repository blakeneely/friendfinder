// Set up requirements
var express = require("express");
var app = express();

// Set up server
var PORT = process.env.PORT || 8081;

// Set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to files

// ************* REMEMBER TO UNCOMMENT THESE ONCE BUILT ****************

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});
