const TagsRepository = require("../repositories/TagsRepository");
const TagsShowService = require("../services/tags/TagsShowService");

class TagsController {
  async index(request, response) {
    const user_id = request.user.id;

    const tagsRepository = new TagsRepository();
    const tagsService = new TagsShowService(tagsRepository);

    const tagsShowService = await tagsService.execute(user_id);


    return response.json(tagsShowService);
  }
}

module.exports = TagsController;
