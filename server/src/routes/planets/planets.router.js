const express = require('express');
const planetsRouter = express.Router();
const {
    httpGetAllPlanets,
} = require('../../controllers/planets/planets.controller')

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;