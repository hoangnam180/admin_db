const express = require("express");
const path = require("path");
const moment = require("moment");
const configViewEngine = (app) => {
  app.use(express.static(path.join(__dirname, "../public")));
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));
  app.use((req, res, next) => {
    res.locals.moment = moment;
    next();
  });
};

module.exports = configViewEngine;
