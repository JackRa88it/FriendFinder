var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // compare the user's scores with the other people and find the lowest difference

    var bestFriend = {
      name: "",
      photo: "",
      difference: 0
    };

    var sumDifference;

    var userData = req.body;
    var userScores = userData.scores;

    for (var i = 0; i < friends.length; i++) {
      sumDifference = 0;

      // console.log(friends[i].name);

      for (var j = 0; j < friends[i].scores.length; j++) {
        var currentFriendScore = friends[i].scores[j];
        var currentUserScore = userScores[j];

        // use absolute value to ensure it's the positive, total difference
        sumDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (sumDifference <= bestFriend.difference) {
        // Reset the bestFriend to be the new friend.
        bestFriend.name = friends[i].name;
        bestFriend.photo = friends[i].photo;
        bestFriend.difference = sumDifference;
      }
    }

    friends.push(userData);

    res.json(bestFriend);

  });

};