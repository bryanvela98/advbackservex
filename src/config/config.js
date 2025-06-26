import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  URL_MONGO: process.env.URL_MONGO,
  FIRMA_COOKIE: process.env.FIRMA_COOKIE,
  EXPIRES_TIME_TOKEN: process.env.EXPIRES_TIME_TOKEN,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
};
