var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var friends = require("./app/data/friends.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
  
// app.get("/reservation", function(req, res) {
// res.sendFile(path.join(__dirname, "reservation.html"));
// });

// app.get("/view", function(req, res) {
// res.sendFile(path.join(__dirname, "view.html"));
// });

//API "Endpoints"
app.get("/api/friends", function(req, res) {
return res.json(friends);
});

// app.post("/api/reservations", function(req, res) {
     
//     var newRes = req.body;

//     console.log(req.body);

//     if(tables.length < 5) {
//         tables.push(newRes);
//     } else {
//         waitlist.push(newRes)
//     }

//     console.log(newRes);
  
//     res.json(newRes);
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
