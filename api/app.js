const app = require('./server');
// listen for the requests
app.listen(8080, function() {
    console.log('CORS-enabled web server listening on port 8080');
  });