import userModel from "../dao/models/user.model.js";

export const getUsers = async (req, res) => {
  let result = await userModel.find();
  res.send({ status: "success", message: "getUsers", data: result });
};

export const getUserById = async (req, res) => {
  res.send({ status: "success", message: "getUserById" });
};

export const registerUser = async (req, res) => {
  res.send({ status: "success", message: "registerUser" });
};
