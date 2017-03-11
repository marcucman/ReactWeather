var express = require('express'); // now the express api is available

// create the app
var app = express();
const PORT = process.env.PORT || 3000;

// express middleware
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// express.static('folderName') tells express where to look for files to serve up
app.use(express.static('public'));

// start server
// app.listen(port, function to call when server is up)
app.listen(port, function() {
  console.log('Express server is up on port ' + PORT);
});
