var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Hello A6!!\n');

}).listen(1337, '127.0.0.1');
