// Load the http module to create an http server.
var http = require('http');

// Load the net module to create a tcp server.
var net = require('net');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});

    var now = new Date();

    var time = now.getHours() + ':' + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds()));
    response.end(time+", that's what time it is.");

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

// Creates a new TCP server. The handler argument is automatically set as a listener for the 'connection' event
var tcp_server = net.createServer(function (socket) {

  // Every time someone connects, tell them hello and then close the connection.
  console.log("Connection from " + socket.remoteAddress);
  socket.end("Hello World from TCP\n");

});

// Fire up the server bound to port 9000 on localhost
tcp_server.listen(9000, "0.0.0.0");

// Put a friendly message on the terminal
console.log("TCP server listening on port 9000 at localhost. Communicate with 'nc localhost 9000'");
