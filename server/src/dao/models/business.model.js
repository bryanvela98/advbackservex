import mongoose from "mongoose";

const collection = "";
const businessSchema = new mongoose.Schema({
  name: String,
  products: [],
});

const businessModel = mongoose.model(collection, businessSchema);
export default businessModel;
