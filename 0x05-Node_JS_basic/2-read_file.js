/**
 * countStudents: counts the number of students in each category
 * with data read from a database file synchronously.
 */
const fs = require('fs');

const countStudents = (database) => {
  try {
    const students = fs.readFileSync(database, 'utf8');
    const studentsArray = students.trim().split('\n').slice(1);

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
      console.log(`Number of students in ${category
      }: ${filteredStudents.length} List: ${filteredStudents.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
