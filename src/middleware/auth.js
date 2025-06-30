import jwt from "jsonwebtoken";
import config from "../config/config.js";

const PRIVATE_KEY = config.JWT_PRIVATE_KEY;

export const isLoggedIn = (req, res, next) => {
  const authHeader = req.cookie.currentUser;
  if (!authHeader) res.render("login"); //Redirect to login page if there is no session
  const token = authHeader.split(" ")[1]; //Split to drop 'bearer' word
  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    //Token Validation
    if (error) return res.status(403).send({ error: "Not authorized" });
    req.user = credentials;
    next();
  });
};

export const isLoggetOut = (req, res, next) => {
  const authHeader = req.cookies.currentUser;
  if (!authHeader) {
    next();
  } else {
    res.render("current");
  }
};
