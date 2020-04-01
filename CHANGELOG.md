# CHANGELOG

All important changes to this project will be added to this file! This changelog will be based on [Keep a change log](http://keepachangelog.com/)

## 1.0.0

### Added

* Adding project organization with Docker, Docker-compose, README.md...
* First documentation about how install chocolate in Windows.
* Projects:
    * NodeJS simple project.
* In Rest API we create some routes:
  * GET - /healthcheck
  * GET - /projects
  * POST - /projects
  * PUT - /projects/:id
  * DELETE - /projects/:id
  * POST - /projects/:id/tasks
* The healthcheck just result a sucess message 200.
* We create Controller and Routes.
* Controllers:
  * HealthCheckController.
  * ProjectController.
* The Middlewares:
  * Global Middleware.
  * Check project ID Middleware.
* All packages we install using yarn.

## 1.1.0

### Added

* ESlint, prettier, sucrease.
* Editorconfig.
* Using import and export modules sintaxy.

### Removed

* Removed MySQL in docker-compose. This is because we create a simple simples api rest.
* Remove database.js script connector.
