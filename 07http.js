const http = require('http');
const fs = require('fs');
const path = require('path');

const requestListener = (req, res) => {
  console.log(req.url, req.method);
  const [url, method] = [req.url, req.method];
  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Form</title></head>');
    res.write('<body>');
    res.write('<form action="/form_message" method="POST">');
    res.write('<input type="text" name="msg">');
    res.write('<input type="text" name="extra">');
    res.write('<button type="submit">Send message</button>');
    res.write('</form>');
    res.write('</body></html>');
    return res.end();
  } if(url === '/form_message' && method === 'POST') {
    const reqBody = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      reqBody.push(chunk);
    });
    req.on('end', () => {
      const reqParse = Buffer.concat(reqBody).toString('utf8');
      console.log(reqParse);
      const msg = reqParse.split('=')[1];
      let logFile = path.join('.', path.sep, 'files', 'test', 'log.txt');
      fs.writeFile(logFile, msg, (err, result) => {});
    });
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Not found</title></head>');
  res.write('<body><h1>404 This is not the page you are looking for</h1></body></html>');
  res.end();
}

const server = http.createServer(requestListener);

server.listen(3050);