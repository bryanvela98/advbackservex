import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const getUsers = async (req, res) => {
  let result = await userService.getUsers();
  res.send({ status: "success", result });
};

export const getUserById = async (req, res) => {
  const { uid } = req.params;
  let result = await userService.getUserById(uid);
  res.send({ status: "success", result });
};

export const registerUser = async (req, res) => {
  const user = req.body;
  let result = await userService.registerUser(user);
  res.send({ status: "success", result });
};
