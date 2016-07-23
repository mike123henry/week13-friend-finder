var appRoutes = require('..\\..\\server.js');
var pathRoutes = require('..\\..\\server.js');


appRoutes.appServer.get('/', function(req, res){
     res.sendFile(pathRoutes.pathServer.join(__dirname, '..\\public\\home.html'));
 })

appRoutes.appServer.get('/survey', function(req, res){
     res.sendFile(pathRoutes.pathServer.join(__dirname, '..\\public\\survey.html'));
});
