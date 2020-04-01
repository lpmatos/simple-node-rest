/* eslint-disable no-return-assign */
import crypto from 'crypto';

const projects = [];

export default {
  index(request, response) {
    return response.json(projects);
  },

  create(request, response) {
    const { title } = request.body;
    projects.push({
      id: crypto.randomBytes(4).toString('HEX'),
      title,
      tasks: [],
    });
    return response.json(projects);
  },

  createTask(request, response) {
    const { id } = request.params;
    const { tasks } = request.body;
    const project = projects.find((p) => (p.id = id));
    project.tasks = tasks;
    return response.json(project);
  },

  update(request, response) {
    const { id } = request.params;
    const { title } = request.body;
    const project = projects.find((p) => (p.id = id));
    project.title = title;
    return response.json(project);
  },

  delete(request, response) {
    const { id } = request.params;
    const project = projects.findIndex((p) => (p.id = id));
    projects.splice(project, 1);
    return response.send();
  },

  checkProjectExist(request, response, next) {
    const { id } = request.params;
    const project = projects.find((p) => (p.id = id));
    if (project) {
      next();
    }
    return response.status(400).json({
      error: 'Project NotFount',
    });
  },
};
