const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
const UserRepository = require("../repositories/UserRepository");
const knex = require("../database/knex");

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    let avatarFilename;
    const userRepository = new UserRepository();

    if (!request.file) {
      throw new AppError("File not found");
    } else {
      avatarFilename = request.file.filename;
    }

    const user = await userRepository.findById(user_id);
    // const user = await knex("users").where({id: user_id}).first();

    if (!user) {
      throw new AppError("Unauthenticated user", 404);
    }

    if (user.avatar) {
      await userRepository.deleteAvatar(user.avatar);
    }

    const filename = await userRepository.saveAvatar(avatarFilename);
    user.avatar = filename;

    userRepository.updateAvatar({ user_id, user });

    return response.json(user);
  }
}

module.exports = UserAvatarController;
