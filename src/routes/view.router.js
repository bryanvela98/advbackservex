import { Router } from "express";

const router = Router();

//Endpoint for registering a new user
router.get("/register", (req, res) => res.render("register"));

//Endpoint for Login
router.get("/login", (req, res) => res.render("login"));

//Endpoint for current user
router.get("/current", (req, res) => res.render("current"));

export default router;
