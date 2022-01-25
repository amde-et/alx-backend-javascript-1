/**
 * Create a small HTTP server using the http module.
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const fileName = process.argv[2];

// Http paths
const path = {
  '/': (res) => {
    res.end('Hello Holberton School!');
  },
  '/students': (res) => {
    countStudents(fileName).then((data) => {
      data.unshift('This is the list of our students');
      res.end(data.join('\n'));
    }).catch((error) => {
      res.end(error);
    });
  },
};

const app = http.createServer((req, res) => {
  const {
    url,
  } = req;
  if (url in path) {
    path[url](res);
  }
});

app.listen(port);

module.exports = app;
