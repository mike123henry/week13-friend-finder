var appApi = require('..\\..\\server.js');
var pathApi = require('..\\..\\server.js');
var friendsList = require('..\\data\\friends.js');


console.log("friendsList"+friendsList.friends[0].question[0]);
console.log("api routes");

console.log("appRoutes.appServer = "+appApi.appServer);

var friend = [];

appApi.appServer.post('/newFriend', function(req, res){
    // console.log("friendsList.friends.length = "+friendsList.friends.length);
    // console.log("req = "+req);
    // console.log(" req.body.name =" +req.body.name);
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
        // console.log("friendsList.friends[i].question[x] = "+ friendsList.friends[1].question[1]);
        // console.log("friends.question[x] = "+ friend[0].question[1]);
        for (var x = 0; x < 10; x++) {
            compatability += Math.abs(parseInt(friendsList.friends[i].question[x])-parseInt(friend[0].question[x]));
            console.log(  "compatability = " +compatability + " i "+i +" x "+x )
        }
        if (compatability<bestCompat) {
            bestCompat = compatability;
            compNdx =i; //this is the index best match
            }
        }
        console.log("best fit = "+friendsList.friends[compNdx].name);
    // console.log(friends);
     res.json(friendsList.friends[compNdx].name);
});

