const { hash } = require("bcryptjs");
class UserRepositoryInMemory {
  constructor() {
    this.users = [];
  }
  async create({ name, email, password }) {
    const passwordHash = await hash(password, 8);
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      email,
      name,
      password: passwordHash,
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

  async update(user, user_id) {
    const index = this.users.findIndex((user) => user.id === user_id);
    if (index !== -1 && user) {
      this.users[index] = { ...this.users[index], ...user };
    }
  }

  async updateAvatar({ user_id, user }) {
    return this.users.findIndex((user) => user.id === user_id);
  }

  async saveAvatar(avatarFilename) {
    return (this.users.avatar = avatarFilename);
  }

  async delete(id) {
    return this.users.findIndex((user) => user.id === id);
  }
}

module.exports = UserRepositoryInMemory;
