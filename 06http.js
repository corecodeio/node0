const http = require('http');

const requestListener = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Welcome</title></head>');
  res.write('<body><h1>Hola Que tal!</h1></body></html>');
  res.end();
}

const server = http.createServer(requestListener);

server.listen(3050);