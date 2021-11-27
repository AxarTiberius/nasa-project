const express = require('express');
const v1Api = express.Router();

const launchesRouter = require("./launches/launches.router");
const planetsRouter = require("./planets/planets.router");

v1Api.use('/planets', planetsRouter);
v1Api.use('/launches', launchesRouter);

module.exports = v1Api;