var appRoutes = require('..\\..\\server.js');
var pathRoutes = require('..\\..\\server.js');


console.log("html routes");

console.log("appRoutes.appServer = "+appRoutes.appServer);

//var path = require("path");


appRoutes.appServer.get('/', function(req, res){
     res.sendFile(pathRoutes.pathServer.join(__dirname, '..\\public\\home.html'));
 })

appRoutes.appServer.get('/survey', function(req, res){
     res.sendFile(pathRoutes.pathServer.join(__dirname, '..\\public\\survey.html'));
});
