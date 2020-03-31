const express = require("express");
const routes = express.Router();
const projects = Array();

// Getting Controllers
const ProjectController = require("../controllers/ProjectController");
const HealthCheckController = require("../controllers/HealthCheckController");

// Middleware that is specific to this router
routes.use(function (request, response, next){
  console.time("Request");
  console.log(`Método: ${request.method} - URL: ${request.url}`);
  console.count("Número de Requisições");
  console.timeEnd("Request");
  next();
});

// Route - Healthcheck
routes.get("/healthcheck", HealthCheckController.index);

// Route - Projects
routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.create);
routes.put("/projects/:id", ProjectController.checkProjectExist, ProjectController.update);
routes.delete("/projects/:id", ProjectController.checkProjectExist, ProjectController.delete);
routes.post("/projects/:id/tasks", ProjectController.checkProjectExist, ProjectController.createTask);

module.exports = routes;
