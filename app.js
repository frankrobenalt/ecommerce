//gets HTTP module and what's attached to its exports
var http = require('http');
//gets the file module for getting html
var fs = require('fs');

//method available that creates new server object, takes a callback function, actually an event listener
//request coming in, response going back
http.createServer(function(req, res) {
  //routes to correct url
  if (req.url === '/') {
    //writing html to response stream
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //connect a readable file stream and pipe it to response stream
    //every chunk of data read from file is buffered and piped out to http response stream
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else {
    //gives error if user goes to url extension which doesnt exist
    res.writeHead(404);
    res.end('We could not find that link');
  }

  //when info comes to server, here's the port to listen on, and ip address (local host)
}).listen(1337, '127.0.0.1');
