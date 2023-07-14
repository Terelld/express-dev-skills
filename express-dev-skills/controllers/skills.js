
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };

  function deleteSkill(req, res) {
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills');
  }

function create(req, res) {
  //Models are responsible for CRUD'ing the datea
  Skill.create(req.body);
  //redirect tells the browser to make a new request
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', {title: 'New Skill'});
}

  function show(req, res) {
    res.render ('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skills Info'
    })
  }

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }


  


 