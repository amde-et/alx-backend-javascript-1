/**
 * Contains all the functions that are used to read the database
 */
const fs = require('fs');

const readDatabase = (filePath) => {
  const filePromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const studentsArray = data.trim().split('\n').slice(1);

        const students = studentsArray.map((student) => {
          const fields = student.replace('\r', '').split(',');
          return fields;
        });

        const categories = [...new Set(students.map((student) => student[student.length - 1]))];

        const fields = {};

        categories.forEach((category) => {
          fields[category] = students.filter(
            (student) => student[student.length - 1] === category,
          ).map((student) => student[0]);
        });

        resolve(fields);
      }
    });
  });
  return filePromise;
};

module.exports = readDatabase;
