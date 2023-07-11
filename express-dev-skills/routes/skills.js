const express = require('express');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

  // Require the controller that exports To-Do CRUD functions
  const skillsCtrl = require('../controllers/skills');

  // All actual paths begin with "/todos"

  // GET /todos
  router.get('/', skillsCtrl.index);

module.exports = router;
