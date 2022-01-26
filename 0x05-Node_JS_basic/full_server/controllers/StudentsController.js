/**
 * Contains all the functions that are used as students route handlers
 */
const readDatabase = require('../utils');

const fileName = process.argv[2];

class StudentsController {
  static getAllStudents(_req, res) {
    readDatabase(fileName).then((data) => {
      const logs = ['This is the list of our students'];
      for (const [k, v] of Object.entries(data)) {
        logs.push(`Number of students in ${k}: ${v.length
        }. List: ${v.join(', ')}`);
      }
      res.status(200).send(logs.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    const acceptedMajors = ['CS', 'SWE'];
    if (!acceptedMajors.includes(field)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    response.set('Content-Type', 'text/plain');
    readDatabase(fileName).then((data) => {
      response.status(200).send(`List: ${data[field].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
