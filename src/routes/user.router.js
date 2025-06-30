import { Router } from "express";
import UserService from "../models/user.model.js";
import { generateToken, isValidPassword } from "../utils.js";

const router = Router();

//User registration
router.post("/register", async (req, res) => {
  try {
    //Create the user based on the data from registration form
    //const newUser = new UserService(req.body);
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" }); //Check if all fields are filled
    }
    const newUser = new UserService({
      first_name,
      last_name,
      email,
      password, //Password will be hashed in the model
    });

    await newUser.save(); //Saving user on database
    res
      .status(201)
      .json({ status: true, message: "User Registered Succesfully" });
    res.redirect("/user/current");
  } catch (error) {
    res.status(400).json({ error: error.message }); //Error management in user registration
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    //Get dat from body using destructuring
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "User and Password should be entered" }); //Check if all fields are filled
    }
    /**
     *  To validate the password:
     * -Search the user in the database by email
     * -Compare the password entered with plain text with the hashed password in the database
     **/
    const user = await UserService.findOne({ email }); //Find user by email
    if (!user) {
      return res.status(404).json({ error: "User not found" }); //If user is not found
    }
    if (!isValidPassword(user, password)) {
      return res.status(404).json({ error: "Invalid Credentials" });
    }

    //Save JWT in a user cookie
    const jwt_token = generateToken({
      userId: user._id,
      role: user.role,
      first_name: user.first_name,
      last_name: user.last_name,
    }); //Generate JWT token with user ID and role
    res.cookie("currentUser", jwt_token, { httpOnly: true }); //Saving token in a HttpOnly cookie
    res.redirect("/user/current");
  } catch (error) {
    console.log(`Error al iniciar sesión ${error}`);
    res.status(400).json("Error al iniciar sesión"); //Error management in login
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("currentUser", { httpOnly: true });
  res.redirect("/user/login");
});

export default router;
