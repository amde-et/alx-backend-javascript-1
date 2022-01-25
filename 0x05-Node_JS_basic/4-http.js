/**
 * Create a small HTTP server using the http module.
 */
const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
