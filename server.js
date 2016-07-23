
//setup express to work as a server
var express = require("express");
var app = express();
app.set("port", process.env.PORT || 3000);
console.log("express = "+express);
console.log("app = "+app);
exports.appServer = app

//import the routes files
var htmlRoutes = require('./app/routing/html-routes.js')


//set express to listen to a port
app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:' + app.get('port') +" press cntrl-C to exit");
});