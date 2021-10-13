const http = require('http');

const requestListener = (req, res) => {
  console.log(req);
  console.log('Request listener!');
}

const server = http.createServer(requestListener);

server.listen(3050);

