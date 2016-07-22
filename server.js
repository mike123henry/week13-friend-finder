//setup express to work as a server
var express = require("express");
var app = express();
app.set("port", process.env.PORT || 3000);

// setup path to work
var path = require("path");

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'app\\public\\home.html'));
})



//set express to listen to a port
app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:' + app.get('port') +" press cntrl-C to exit");
});