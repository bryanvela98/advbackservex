import express from "express";
import config from "./config/config.js";
import { __dirname } from "./utils.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.config.js";

//Importing routers
import userRouter from "./routes/user.router.js";
import rentalOrderRouter from "./routes/rentalOrder.router.js";
import businessRouter from "./routes/business.router.js";

const PORT = config.PORT;
const URL_MONGO = config.URL_MONGO;
const COOKIE_FIRM = config.COOKIE_FIRM;

const app = express();
const connection = connectDB(URL_MONGO);

//Server config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //Middleware for working with cookies and signature
app.use(express.static(__dirname + "/public")); //Middleware for serving static files

//Router for views and API
app.use("/api/user", userRouter);
app.use("/api/order", rentalOrderRouter);
app.use("/api/business", businessRouter);

//Starting Server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
