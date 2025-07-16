import mongoose, { mongo } from "mongoose";

const collection = "rentalOrder";

const rentalOrderSchema = new mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "business",
  },
  user: {
    //User who makes the order
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
  equipment: [],
  totalPrice: Number,
  status: String, //Field to cancel or complete an rental order
});

const rentalOrderModel = mongoose.model(collection, rentalOrderSchema);
export default rentalOrderModel;
