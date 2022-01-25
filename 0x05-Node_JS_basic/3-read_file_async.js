/**
 * countStudents: counts the number of students in each category
 * with data read from a database file asynchronously.
 */
const fs = require('fs');

/**
 * readData: reads the data and counts the
 * number of students in each field.
 * @param {list} data - list of students
 */
const readData = (data) => {
  const logs = [];
  const studentsArray = data.trim().split('\n').slice(1);

  logs.push(`Number of students: ${studentsArray.length}`);
  console.log(`Number of students: ${studentsArray.length}`);
  let categories = studentsArray.map((student) => {
    const fields = student.replace('\r', '').split(',');
    return fields.at(-1);
  });
  // Retrieve unique categories
  categories = [...new Set(categories)];

  categories.forEach((category) => {
    const filteredStudents = [];
    studentsArray.filter((student) => {
      // Retrieves student with category
      const studentFields = student.replace('\r', '').split(',');
      if (studentFields.at(-1) === category) {
        // Push names of students with category
        filteredStudents.push(studentFields[0]);
        return studentFields;
      }
      return false;
    });
    logs.push(`Number of students in ${category
    }: ${filteredStudents.length} List: ${filteredStudents.join(', ')}`);
    console.log(`Number of students in ${category
    }: ${filteredStudents.length} List: ${filteredStudents.join(', ')}`);
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

module.exports = countStudents;
