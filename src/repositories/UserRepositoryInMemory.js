class UserRepositoryInMemory {
  users = [];
  async create({ name, email, password }) {
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      email,
      name,
      password,
    };

    this.users.push(user);

    return user;
  }

  async findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  async findById(id) {
    return this.users.find((user) => user.id === id);
  }

  async update({ id, name, email, password }) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    console.log(userIndex);
    if (userIndex !== -1) {
      // Atualize apenas os campos fornecidos
      if (name) this.users[userIndex].name = name;
      if (email) this.users[userIndex].email = email;
      if (password) this.users[userIndex].password = password;

      // Retorne o usuário atualizado
      return { ...this.users[userIndex] };
    }

    // Se o usuário não for encontrado, retorne null ou lance uma exceção, dependendo do seu caso
    return null;
  }
}
module.exports = UserRepositoryInMemory;
