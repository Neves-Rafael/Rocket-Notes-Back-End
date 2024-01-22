class NotesRepositoryInMemory {
  constructor() {
    this.notes = [];
  }
  async create(title, description, user_id, tags, links) {
    const note = {
      user_id,
      title,
      description,
      tags,
      links,
    };
    this.notes.push(note);
    return note;
  }

  async show(id) {}

  async delete(id) {
    //verify result delete in notes
    const index = this.notes.findIndex((note) => note.user_id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }

    if (this.notes[0] && this.notes[0].user_id === id) {
      return this.notes[0].user_id;
    }
    return this.notes;
  }

  async index({ title, tags, user_id }) {}
}

module.exports = NotesRepositoryInMemory;
