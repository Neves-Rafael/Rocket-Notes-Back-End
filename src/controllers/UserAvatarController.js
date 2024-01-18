
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
const UserRepository = require("../repositories/UserRepository");
const knex = require("../database/knex");

class UserAvatarController{
    async update(request, response){
        const user_id = request.user.id;
        const avatarFilename = request.file.filename;
        const userRepository = new UserRepository();

        if(!avatarFilename){
            throw new AppError("File not found", 404);
        }

        const user = await userRepository.findById(user_id);
        // const user = await knex("users").where({id: user_id}).first();

        if(!user){
            throw new AppError("Unauthenticated user", 404);
        }

        if(user.avatar){
            await userRepository.deleteAvatar(user.avatar);

        }

        const filename = await userRepository.saveAvatar(avatarFilename);
        user.avatar = filename;

        userRepository.updateAvatar({user_id, user});

        return response.json(user);
    }
}

module.exports = UserAvatarController;