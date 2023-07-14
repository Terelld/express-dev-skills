const skills = [
    {id: 11, skill: 'Type fast'},
    {id: 22, skill: 'Amazing coder'},
    {id: 33, skill: 'Javascript Expert'}
  ];
	
 
  module.exports = {
    getAll,
    create,
    deleteSkill
  };

  function deleteSkill(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }


function create(skill) {
  skill.id = Date.now() % 100000;
  skills.push(skill);
}

  function getAll() {
    return skills;
  };

