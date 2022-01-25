/**
 * Contains all routing paths
 */
const {
  Router,
} = require('express');
const AppController = require('../controllers/AppController');
// const StudentsController = require('../controllers/StudentsController');

const router = Router();

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});
// router.get('/students', StudentsController.getStudents());
// router.get('/students/:major', StudentsController.getAllStudentsByMajor());

module.exports = router;
