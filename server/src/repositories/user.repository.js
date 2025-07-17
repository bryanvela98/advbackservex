import UserDTO from "../dao/dto/user.dto.js";
import UserDAO from "../dao/user.dao.js";

export default class UserRepository {
  constructor() {
    this.dao = new UserDAO();
  }

  getUsers = async () => {
    let result = await this.dao.getUsers();
    return result;
  };

  getUserById = async (id) => {
    let result = await this.dao.getUserById(id);
    return result;
  };

  registerUser = async (userData) => {
    let userToInsert = new UserDTO(userData);
    let result = await this.dao.registerUser(userToInsert);
    return result;
  };

  updateUser = async (id, user) => {
    let userToUpdate = new UserDTO(user);
    let result = await this.dao.updateUser(id, userToUpdate);
    return result;
  };
}
