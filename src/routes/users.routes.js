const { Router } = require("express");
const UsersController = require("../controllers/UsersController");


const usersRoutes = Router();


const userController = new UsersController();
usersRoutes.post("/", myMiddleware, userController.create);

module.exports = usersRoutes;
