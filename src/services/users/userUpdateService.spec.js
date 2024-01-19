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
    const initialUser = {
      name: "User Test",
      email: "user@test.com",
      password: "123",
    };

    const userUpdate = await userRepositoryInMemory.create(initialUser);

    const updateUserData = {
      id: userUpdate.id,
      name: "Update User Test",
      email: "updateuser@test.com",
      password: "456",
    };

    const updatedUser = await userUpdateService.execute(updateUserData);
    console.log(updatedUser);

    // expect(updatedUser).toHaveProperty("id", createdUser.id);
    // expect(updatedUser.name).toBe(updateUserData.name);
    // expect(updatedUser.email).toBe(updateUserData.email);
  });
});
