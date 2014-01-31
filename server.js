// I AM server.js uses Sencha Connect packages
// npm install connect
// In the folder you want to run the server in
var myport = 8080;
var connect = require('connect'), http = require('http');
var shoutOut = function() {
  console.log("I AM  at your service on port: " + myport);
}
var app = connect().use(connect.static(__dirname + '/workspace'));
//Run
app.listen(myport);
shoutOut();
