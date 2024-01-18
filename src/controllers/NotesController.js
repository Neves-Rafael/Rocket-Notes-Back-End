const NotesRepository = require("../repositories/NotesRepository");
const NoteCreateService = require("../services/notes/NoteCreateService");

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body;
    const user_id = request.user.id;

    const notesRepository = new NotesRepository();
    const noteCreateService = new NoteCreateService(notesRepository);
    await noteCreateService.execute({
      title,
      description,
      tags,
      links,
      user_id,
    });

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json({ ...note, tags, links });
  }

  async delete(request, response) {
    const { id } = request.params;

    return response.json();
  }

  async index(request, response) {
    const { title, tags } = request.query;
    const user_id = request.user.id;

    return response.json(notesWithTags);
  }
}

module.exports = NotesController;
