import businessModel from "./models/business.model.js";

export default class BusinessDao {
  getBusiness = async (req, res) => {
    try {
      let businesses = await businessModel.find();
      return businesses;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getBusinessById = async (id) => {
    try {
      let business = await businessModel.findOne({ _id: id });
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  registerBusiness = async (business) => {
    try {
      let businessCreated = await businessModel.create(business);
      return businessCreated;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  updateBusiness = async (id, business) => {
    try {
      let updatedBusiness = await businessModel.updateOne(
        { _id: id },
        { $set: business }
      );
      return updatedBusiness;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
