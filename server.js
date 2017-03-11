var express = require('express'); // now the express api is available

// create the app
var app = express();

// express.static('folderName') tells express where to look for files to serve up
app.use(express.static('public'));

// start server
// app.listen(port, function to call when server is up)
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
