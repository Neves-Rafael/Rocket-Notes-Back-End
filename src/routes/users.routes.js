const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UsersController();
usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  (request, response) => {
    console.log(request.file.filename);
    return response.json({});
  }
);

module.exports = usersRoutes;
