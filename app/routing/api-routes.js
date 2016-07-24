var appApi = require('../../server.js');
var pathApi = require('../../server.js');
var friendsList = require('../data/friends.js');



var friend = [];

appApi.appServer.post('/newFriend', function(req, res){

    friend.push(
    {   name: req.body.name,
        photo: req.body.photo,
        question: [req.body.question1, req.body.question2, req.body.question3, req.body.question4, req.body.question5,
                   req.body.question6, req.body.question7,req.body.question8, req.body.question9, req.body.question10]
    });
    var compatability = 0;
    var bestCompat = 51; //initilize to bigger than the worst match
    var compNdx = 0;
    for (var i = 0; i < friendsList.friends.length; i++) {
        compatability = 0; //reset for next loop

        for (var x = 0; x < 10; x++) {
            compatability += Math.abs(parseInt(friendsList.friends[i].question[x])-parseInt(friend[0].question[x]));
        }
        if (compatability<bestCompat) {
            bestCompat = compatability;
            compNdx =i; //this is the index best match
            }
        }

     res.json(friendsList.friends[compNdx].name);
});

