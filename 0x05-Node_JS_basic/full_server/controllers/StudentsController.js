/**
 * Contains all the functions that are used as students route handlers
 */
const readDatabase = require('../utils');

const fileName = process.argv[2];

class StudentsController {
  static getAllStudents(_req, res) {
    const logs = ['This is the list of our students'];
    readDatabase(fileName).then((data) => {
      for (const major in data) {
        if (major in data) {
          logs.push(`Number of students in ${major
          }: ${data[major].length}. List: ${data[major].join(', ')}`);
        }
      }
      res.status(200).send(logs.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    const acceptedMajors = ['CS', 'SWE'];
    if (!acceptedMajors.includes(field)) {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(fileName).then((data) => {
      res.status(200).send(`List: ${data[field].join(', ')}`);
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
