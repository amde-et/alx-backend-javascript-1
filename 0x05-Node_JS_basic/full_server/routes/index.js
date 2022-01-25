/**
 * Contains all routing paths
 */
const {
  Router,
} = require('express');
const home = require('../controllers/AppController');
const students = require('../controllers/StudentsController');

const router = Router();

router.get('/', home.getHomepage);
router.get('/students', students.getStudents);
router.get('/students/:major', students.getAllStudentsByMajor);

module.exports = router;
