/**
 * Contains all the functions that are used as students route handlers
 */
const readDatabase = require('../utils');

const fileName = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(fileName).then((data) => {
      const logs = [];
      logs.push('This is the list of our students');
      for (const [k, v] of Object.entries(data)) {
        logs.push(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
      }
      res.status(200).send(logs.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    readDatabase(fileName).then((data) => {
      if (!(field in data)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${data[field].join(', ')}`);
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
