const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

//GET request to /skills
router.get('/', skillsCtrl.index);

//Get /skills/new
router.get('/new', skillsCtrl.new);

// Get /skills/:id
router.get('/:id', skillsCtrl.show);

//Post /skills
router.post('/', skillsCtrl.create);

// Delete /skills/:id
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
