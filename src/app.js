import express from "express";
import config from "./config/config.js";
import handlebards from "express-handlebars";
import { __dirname } from "./utils.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

//Importing routers
import userRouter from "./routes/user.router.js";
import viewsRouter from "./routes/view.router.js";

const PORT = config.PORT;
const URL_MONGO = config.URL_MONGO;
const COOKIE_FIRM = config.COOKIE_FIRM;

//App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //Middleware for working with cookies and signature
app.use(express.static(__dirname + "/public")); //Middleware for serving static files

//Router for views and API
app.use("/user", viewsRouter);
app.use("/api/user", userRouter);

//Configuring Handlebars
app.engine("handlebars", handlebards.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Database configuration
mongoose
  .connect(URL_MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Error connecting to the database: ${error}`));
