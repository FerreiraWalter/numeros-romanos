const express = require("express");
const convertRomanNumeralsRoutes = require("./search.routes");

const routes = express.Router();

routes.use("/search", convertRomanNumeralsRoutes);

module.exports = routes;
