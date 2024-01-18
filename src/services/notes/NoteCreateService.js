class NoteCreateService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  async execute({ title, description, tags, links, user_id }) {
     await this.notesRepository.create(
      title,
      description,
      user_id,
      tags,
      links
    );
  }
}

module.exports = NoteCreateService;
