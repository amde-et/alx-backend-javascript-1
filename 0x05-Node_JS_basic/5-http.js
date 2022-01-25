/**
 * Create a small HTTP server using the http module.
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const fileName = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(fileName).then((data) => {
      data.unshift('This is the list of our students');
      res.end(data.join('\n'));
    }).catch((error) => {
      res.end(`${error}`);
    });
  }
});

app.listen(port);

module.exports = app;
