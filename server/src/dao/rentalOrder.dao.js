import rentalOrderModel from "./models/rentalOrder.model.js";

export default class rentalOrderDao {
  getRentalOrders = async (req, res) => {
    try {
      let rentalOrders = await rentalOrderModel.find();
      return rentalOrders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getRentalOrderById = async (id) => {
    try {
      let rentalOrder = await rentalOrderModel.findOne({ _id: id });
      return rentalOrder;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  registerRentalOrder = async (rentalOrder) => {
    try {
      let rentalOrderCreated = await rentalOrderModel.create(rentalOrder);
      return rentalOrderCreated;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  resolveRentalOrder = async (id, rentalOrder) => {
    try {
      let updatedRentalOrder = await rentalOrderModel.updateOne(
        { _id: id },
        { $set: rentalOrder }
      );
      return updatedRentalOrder;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
