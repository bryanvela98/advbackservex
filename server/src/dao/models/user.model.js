import mongoose from "mongoose";
import { createHash } from "../../utils.js";

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true }, // User name
  last_name: { type: String, required: true }, // Last name
  email: { type: String, required: true, unique: true }, // User email
  role: { type: String, required: true, default: "user" }, //User role (e.g., admin, user)
  password: { type: String, required: true }, // User password (hashed)
  user: {
    //User who makes the order
    type: mongoose.SchemaTypes.ObjectId,
    ref: "rentalOrder",
  },
});

//Middleware to hash the password before saving
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next(); // If the password is not modified, skip hashing
  this.password = createHash(this.password); // Replace the password with its hash
  next(); // Call the next middleware in the stack
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
