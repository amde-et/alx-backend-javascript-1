/**
 * Contains all the functions that are used as students route handlers
 */
const readDatabase = require('../utils');

const fileName = process.argv[2];

class StudentsController {
  static getAllStudents(_req, res) {
    res.write('This is the list of our students\n');
    readDatabase(fileName).then((data) => {
      for (const [k, v] of Object.entries(data)) {
        res.write(`Number of students in ${k
        }: ${v.length}. List: ${v.join(', ')}\n`);
      }
      res.status(200).end();
    }).catch(() => {
      res.status(500).end('Cannot load the database');
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
