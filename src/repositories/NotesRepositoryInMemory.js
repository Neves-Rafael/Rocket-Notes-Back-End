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
    const index = this.notes.findIndex((note) => note.user_id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
    const checkId = this.notes.some((note) => note.user_id === id);
    return checkId;
  }

  async index(title, tags, user_id) {
    const searchNoteById = this.notes.filter(
      (note) => note.user_id === user_id
    );
    console.log(searchNoteById);
    tags = ["tag1", "tag2"];
    if (tags) {
      const filterTags = tags.map((tag) => {
        const searchNoteByTag = this.notes.filter((note) => {
          return note.tags.includes(tag);
        });
        console.log(searchNoteByTag);
      });
      console.log(filterTags);
    }

    if (title) {
    }
    return this.notes;
  }
}

module.exports = NotesRepositoryInMemory;
