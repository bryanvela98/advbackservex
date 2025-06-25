import express from "express";
import dotenv from "dotenv";

//Importing routers

import userRouter from "./routes/user.router.js";
import viewsRouter from "./routes/views.router.js";

//App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router for views and API
app.use("/user", viewsRouter);
app.use("/api/user", userRouter);
