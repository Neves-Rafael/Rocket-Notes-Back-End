const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;
    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);
    await userCreateService.execute({ name, email, password });

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const userRepository = new UserRepository();
    // const userCreateService = new UserCreateService(userRepository);
    // await userCreateService.execute({ name, email, password });

 
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found!");
    }

    //reaproveitar findByEmail
    const userWithUpdatedEmail = await userRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("This E-mail already exist!");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(
        "You need put a old Password For change a new Password!"
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("The old Password is not correct");
      }

      user.password = await hash(password, 8);
    }

    userRepository.update({user});

    return response.status(200).json();
  }
}

module.exports = UsersController;
