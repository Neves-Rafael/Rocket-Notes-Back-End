const { Router } = require("express");

const usersRoutes = require("./users.routes");

const routes = Router();

routes.use("/user", usersRoutes);


module.exports = routes;