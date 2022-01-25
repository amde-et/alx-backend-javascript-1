/**
 * Create a more complex HTTP server using the express module.
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const fileName = process.argv[2];

app.get('/', (req, res) => {
  res.headers('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.header('Content-Type', 'text/plain');
  countStudents(fileName).then((data) => {
    data.unshift('This is the list of our students');
    res.send(data.join('\n'));
  }).catch((error) => {
    res.send(error.message);
  });
});

app.listen(port);

module.exports = app;
