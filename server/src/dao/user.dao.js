import userModel from "./models/user.model.js";

export default class UserDao {
  getUsers = async (req, res) => {
    try {
      let users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getUserById = async (id) => {
    try {
      let user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  registerUser = async (user) => {
    try {
      let userCreated = await userModel.create(user);
      return userCreated;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  updateUser = async (id, user) => {
    try {
      let updatedUser = await userModel.updateOne({ _id: id }, { $set: user });
      return updatedUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
