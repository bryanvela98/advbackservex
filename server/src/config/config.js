import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  URL_MONGO: process.env.URL_MONGO,
  FIRMA_COOKIE: process.env.FIRMA_COOKIE,
  JWT_EXPIRES_TIME_TOKEN: process.env.JWT_EXPIRES_TIME_TOKEN,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
};
