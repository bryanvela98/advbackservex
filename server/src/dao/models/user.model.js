import mongoose from "mongoose";
import { createHash } from "../../utils.js";

const userSchema = new mongoose.Schema({
  /*   first_name: { type: String, required: true }, // User name
  last_name: { type: String, required: true }, // Last name
  email: { type: String, required: true, unique: true }, // User email
  role: { type: String, required: true, default: "user" }, //User role (e.g., admin, user)
  password: { type: String, required: true }, // User password (hashed) */
  first_name: String, // User name
  last_name: String, // Last name
  email: String, // User email
  role: String, //User role (e.g., admin, user)
  password: String, // User password (hashed)
  rentalOrders: [
    {
      //User who makes the order
      type: mongoose.SchemaTypes.ObjectId,
      ref: "rentalOrder",
    },
  ],
});

//Middleware to hash the password before saving
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next(); // If the password is not modified, skip hashing
  this.password = createHash(this.password); // Replace the password with its hash
  next(); // Call the next middleware in the stack
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
