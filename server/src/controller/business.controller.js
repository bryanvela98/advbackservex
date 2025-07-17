import BusinessDao from "../dao/business.dao.js";

const businessService = new BusinessDao();

export const getBusiness = async (req, res) => {
  let result = await businessService.getBusiness();
  res.send({ status: "success", result });
};

export const getBusinessById = async (req, res) => {
  const bid = req.params.bid;
  let result = await businessService.getBusinessById(bid);
  res.send({ status: "success", result });
};

export const createBusiness = async (req, res) => {
  const business = req.body; //Las validaciones las dejamos para después
  let result = await businessService.registerBusiness(business);
  if (!result)
    return res.status(500).send({
      status: "error",
      error: "Something went wrong, try again later",
    });
  res.send({ status: "success", result });
};

export const addProduct = async (req, res) => {
  const bid = req.params.bid;
  const product = req.body;

  //Search the business by ID
  const business = await businessService.getBusinessById(bid);
  //Add the product to the array of products in the business
  business.products.push(product);
  //Show the updated business
  const result = await businessService.updateBusiness(business._id, business);

  if (!result) {
    return res.status(500).send({
      status: "error",
      error: "Something went wrong, try again later",
    });
  }

  res.send({ status: "success", result });
};
