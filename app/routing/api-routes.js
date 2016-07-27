var appApi = require('../../server.js');
var pathApi = require('../../server.js');
var friendsList = require('../data/friends.js');



//var friend = [];

appApi.appServer.post('/newFriend', function(req, res){
var friend = [];
    friend.push(
    {   name: req.body.name,
        photo: req.body.photo,
        question: [parseInt(req.body.question1),
                    parseInt(req.body.question2),
                    parseInt(req.body.question3),
                    parseInt(req.body.question4),
                    parseInt(req.body.question5),
                    parseInt(req.body.question6),
                    parseInt(req.body.question7),
                    parseInt(req.body.question8),
                    parseInt(req.body.question9),
                    parseInt(req.body.question10)]
    });
    var compatability = 0;
    var bestCompat = 51; //initilize to bigger than the worst match
    var compNdx = 0;
    for (var i = 0; i < friendsList.friends.length; i++) {
        compatability = 0; //reset for next loop
        for (var x = 0; x < 10; x++) {
            compatability += Math.abs(friendsList.friends[i].question[x]-friend[0].question[x]);
        }
        if (compatability<bestCompat) {
            bestCompat = compatability;
            compNdx =i; //this is the index best match
            }
        }

     res.json(friendsList.friends[compNdx].name);
     friendsList.friends.push(friend[0]);
     console.log(friendsList.friends)
});


appApi.appServer.get('/api/friends', function(req, res){

    res.json(friendsList.friends);
});