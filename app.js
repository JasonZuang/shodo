var express = require("express");
var shodoController = require('./controllers/shodoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
shodoController(app);

//listen to port
app.listen(3000);
console.log("Listening to 3000");
