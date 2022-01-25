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
      res.write('This is the list of our students\n');
      res.write(`${data[0]}\n`);
      res.write(`${data[1]}\n`);
      res.write(`${data[2]}`);
      res.end();
      // res.end(data.join('\n'));
    }).catch((error) => {
      res.end(`${error}`);
      throw new Error(error.message);
    });
  }
});

app.listen(port);

module.exports = app;
