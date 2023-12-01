const AppError = require("../utils/AppError");

/*
No max um controler pode ter 5 metodos

* index - GET Para listar vários registros
* show - GET para exibir um registro especifico
* create - POST para criar um registro
* update - PUT para atualizar um registro.
* delete - DELETE para remover um registro
*/

class UsersController {
  create(request, response) {
    const { name, email, password } = request.bodyy;

    if (!name) {
      throw new AppError("Your name is obligatory!");
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
