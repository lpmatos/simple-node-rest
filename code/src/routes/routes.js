import express from 'express';

// Getting Controllers
import ProjectController from '../controllers/ProjectController';
import HealthCheckController from '../controllers/HealthCheckController';

const routes = express.Router();

// Middleware that is specific to this router
routes.use((request, response, next) => {
  console.time('Request');
  console.log(`Método: ${request.method} - URL: ${request.url}`);
  console.count('Número de Requisições');
  console.timeEnd('Request');
  next();
});

// Route - Healthcheck
routes.get('/healthcheck', HealthCheckController.index);

// Route - Projects
routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.create);
routes.put(
  '/projects/:id',
  ProjectController.checkProjectExist,
  ProjectController.update
);
routes.delete(
  '/projects/:id',
  ProjectController.checkProjectExist,
  ProjectController.delete
);
routes.post(
  '/projects/:id/tasks',
  ProjectController.checkProjectExist,
  ProjectController.createTask
);

export default routes;
