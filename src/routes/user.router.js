import { Router } from "express";
import UserService from "../models/user.model.js";

const router = Router();

//User registration
router.post("/register", async (req, res) => {
  try {
    //Create the user based on the data from registration form
    const newUser = new UserService(req.body);
    await newUser.save(); //Saving user on database
    res.status(201).json({ message: "User Registered Succesfully" });
  } catch (error) {
    res.status(400).json({ error: error.message }); //Error management in user registration
  }
});

//Login
router.post("/register", async (req, res) => {
  try {
    //Get dat from body
    //Validate the password
    //Get user data and save it in JWT
    //Save JWT in a user cookie
  } catch (error) {
    res.status(500).json({ error: error.message }); //Error management in login
  }
});

export default router;
