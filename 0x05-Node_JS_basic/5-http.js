/**
 * Create a small HTTP server using the http module.
 */
const fs = require('fs');
const http = require('http');

/**
 * readData: reads the data and counts the
 * number of students in each field.
 * @param {list} data - list of students
 */
const readData = (data) => {
  const logs = [];
  const studentsArray = data.trim().split('\n').slice(1);

  logs.push('This is the list of our students');
  const studentInfo = `Number of students: ${studentsArray.length}`;
  logs.push(studentInfo);

  const students = studentsArray.map((student) => {
    const fields = student.replace('\r', '').split(',');
    return fields;
  });

  const categories = [...new Set(students.map(
    (student) => student[student.length - 1],
  ))];

  categories.forEach((category) => {
    const filteredStudents = students.filter(
      (student) => student[student.length - 1] === category,
    ).map((student) => student[0]);

    const info = `Number of students in ${category
    }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`;
    logs.push(info);
  });

  return logs;
};

/**
 * countStudents - Reads the file asynchronously.
 * @param {string} database - path to database file
 * @returns promise
 */
const countStudents = (database) => {
  const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        resolve(readData(data));
      }
    });
  });
  return readFilePromise;
};

const port = 1245;
const fileName = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(fileName).then((data) => {
      res.end(data.join('\n'));
    }).catch((error) => {
      res.statusCode = 500;
      res.end(`${error}`);
    });
  }
});

app.listen(port);

module.exports = app;
