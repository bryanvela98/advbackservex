import mongoose from "mongoose";

const collection = "businesses";
const businessSchema = new mongoose.Schema({
  name: String,
  products: [],
});

const businessModel = mongoose.model(collection, businessSchema);
export default businessModel;
