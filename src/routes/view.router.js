import { Router } from "express";
import { isLoggedIn, isLoggetOut } from "../middleware/auth.js";

const router = Router();

//Endpoint for registering a new user
router.get(
  "/register",
  /* isLoggetOut, */ (req, res) => res.render("register")
);

//Endpoint for Login
router.get("/login", /* isLoggetOut, */ (req, res) => res.render("login"));

//Endpoint for current user
router.get(
  "/current",
  /* isLoggedIn, */ (req, res) =>
    res.render("current", { currentUser: req.user })
);

export default router;
