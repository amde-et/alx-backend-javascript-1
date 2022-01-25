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

        const categories = [...new Set(students.map((student) => student[-1]))];
        console.log(categories);

        const fields = {};

        categories.forEach((category) => {
          const filteredStudents = [];
          students.filter((student) => {
            if (student[-1] === category) {
              filteredStudents.push(student[0]);
              return student;
            }
            return false;
          });
          fields[category] = filteredStudents;
        });

        resolve(fields);
      }
    });
  });
  return filePromise;
};

module.exports = readDatabase;
