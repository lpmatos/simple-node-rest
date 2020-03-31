const express = require("express");
const config = require("./settings/config");
const crypto = require("crypto");
const port = config.NODE_PORT;
const server = express();
const projects = Array();
//const connection = require("./database/connector");

server.use(express.json());

// *****************************************************************************

function findProject(projects, id){
  const project = projects.find(project => project.id = id);
  return project ? project : NaN
}

function findIndexProject(projects, id){
  const project = projects.findIndex(project => project.id = id);
  return project ? project : NaN
}

// *****************************************************************************

function globalMiddleware(request, response, next){
  console.time("Request");
  console.log(`Método: ${request.method} - URL: ${request.url}`);
  console.count("Número de Requisições");
  console.timeEnd("Request");
  next();
}

server.use(globalMiddleware);

function checkProjectExist(request, response, next){
  const { id } = request.params;
  const project = findProject(projects, id);
  if(project){
    next();
  }else{
    return response.status(400).json({
      error: "Project NotFount"
    });
  }
}

// *****************************************************************************

/**
 * Rotas:
 * 
 * - GET: /projects
 * - POST: /projects
 * - PUT: /projects/:id
 * - DELETE: /projects/:id/tasks
 */

server.get("/projects", (request, response) => {
  return response.json(projects);
});

server.post("/projects", (request, response) => {
  const { title } = request.body;
  projects.push({
    id: crypto.randomBytes(4).toString("HEX"),
    title: title,
    tasks: []
  });
  return response.json(projects);
});

server.put("/projects/:id", checkProjectExist, (request, response) => {
  const { id } = request.params;
  const { title } = request.body;
  const project = findProject(projects, id);
  project.title = title;
  return response.json(project);
});

server.delete("/projects/:id", checkProjectExist, (request, response) => {
  const { id } = request.params;
  const project = findIndexProject(projects, id);
  projects.splice(project, 1);
  return response.send();
});

server.post("/projects/:id/tasks", checkProjectExist, (request, response) => {
  const { id } = request.params;
  const { tasks } = request.body;
  const project = findProject(projects, id);
  project.tasks = tasks;
  return response.json(project);
});

server.get("/healthcheck", (request, response) => {
  return response.sendStatus(200).json({
    status: 200,
    message: "Okay!"
  });
});

// *****************************************************************************

server.listen(port, (error) => {
  if (error) {
    console.error(`Error starting Server ${error}`);
  } else {
    console.log(`Server listening at port ${port}.`);
  }
});
