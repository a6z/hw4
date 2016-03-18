var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html','UTF-8');
    var message = '來吧寶貝!';
    html = html.replace('{Message}',message);
    res.end(html);
    
}).listen(1337,'127.0.0.1')