const NotesRepositoryInMemory = require("../../repositories/NotesRepositoryInMemory");
const NoteDeleteService = require("./NoteDeleteService");
const AppError = require("../../utils/AppError");

describe("NoteCreateService", () => {
  let notesRepositoryInMemory = null;
  let noteDeleteService = null;

  beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    noteDeleteService = new NoteDeleteService(notesRepositoryInMemory);
  });

  it("Deletando uma Nota", async () => {
    const note = {
      title: "Test",
      description: "Test",
      user_id: Math.floor(Math.random() * 1000) + 1,
      tags: ["tag1", "tag2"],
      links: ["link1", "link2"],
    };

    const noteCreate = await notesRepositoryInMemory.create(
      note.title,
      note.description,
      note.user_id,
      note.tags,
      note.links
    );

    const id = noteCreate.user_id;
    // console.log(await noteDeleteService.execute(id));

    await expect(noteDeleteService.execute(id)).not.toBe(id);
  });
});
