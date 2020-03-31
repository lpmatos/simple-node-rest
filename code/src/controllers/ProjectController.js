const crypto = require("crypto");
const projects = Array();

const findProject = (projects, id) => {
  const project = projects.find(project => project.id = id);
  return project ? project : NaN;
};

const findIndexProject = (projects, id) => {
  const project = projects.findIndex(project => project.id = id);
  return project ? project : NaN;
};

module.exports = {
  index(request, response){
    return response.json(projects);
  },

  create(request, response){
    const { title } = request.body;
    projects.push({
      id: crypto.randomBytes(4).toString("HEX"),
      title: title,
      tasks: []
    });
    return response.json(projects);
  },

  createTask(request, response){
    const { id } = request.params;
    const { tasks } = request.body;
    const project = findProject(projects, id);
    project.tasks = tasks;
    return response.json(project);
  },

  update(request, response){
    const { id } = request.params;
    const { title } = request.body;
    const project = findProject(projects, id);
    project.title = title;
    return response.json(project);
  },

  delete(request, response){
    const { id } = request.params;
    const project = findIndexProject(projects, id);
    projects.splice(project, 1);
    return response.send();
  },

  checkProjectExist(request, response, next){
    const { id } = request.params;
    const project = findProject(projects, id);
    if(project){
      next();
    }else{
      return response.status(400).json({
        error: "Project NotFount"
      });
    }
  },
};
