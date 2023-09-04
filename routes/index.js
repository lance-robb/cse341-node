const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.motorFunction);
routes.get('/race', myController.raceFunction);

module.exports = routes;
