const UserUpdateService = require("./userUpdateService");
const AppError = require("../../utils/AppError");
const UserRepositoryInMemory = require("../../repositories/UserRepositoryInMemory");

describe("userUpdateService", () => {
  let userRepositoryInMemory = null;
  let userUpdateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userUpdateService = new UserUpdateService(userRepositoryInMemory);
  });

  it("Atualizar usuário", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123",
    };

    const userCreate = await userRepositoryInMemory.create(user);

    const userUpdated = await userUpdateService.execute({
      user_id: userCreate.id,
      name: "User Test Updated",
      email: "user@test.com",
      old_password: "123",
      password: "456",
    });

    const userUpdatedResult = await userRepositoryInMemory.findById(
      userCreate.id
    );

    console.log(userUpdated);
    expect(userUpdatedResult.name).toEqual(userUpdated.name);
    expect(userUpdatedResult.email).toEqual(userUpdated.email);
    expect(userUpdatedResult.password).toEqual(userUpdated.password);
  });
});
