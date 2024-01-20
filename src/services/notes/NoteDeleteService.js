class NoteDeleteService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  async execute(id) {
    this.notesRepository.delete(id);
  }
}

module.exports = NoteDeleteService;
