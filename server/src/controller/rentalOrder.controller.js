import rentalOrderDao from "../dao/rentalOrder.dao.js";
import BusinessDao from "../dao/business.dao.js";
import UserRepository from "../repositories/user.repository.js";

const rentalOrderService = new rentalOrderDao();
const businessService = new BusinessDao();
const userService = new UserRepository();

export const getRentalOrders = async (req, res) => {
  let result = await rentalOrderService.getRentalOrders();
  res.send({ status: "success", result });
};

export const getRentalOrderById = async (req, res) => {
  const { oid } = req.params;
  let result = await rentalOrderService.getRentalOrderById(oid);
  res.send({ status: "success", result });
};

export const createRentalOrder = async (req, res) => {
  const { userId, businessId, products } = req.body;

  const user = await userService.getUserById(userId);

  const business = await businessService.getBusinessById(businessId);
  let filteredProducts = business.products.filter((product) =>
    products.includes(product.id)
  );

  //Calculate total price
  let totalPrice = filteredProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  //Order number generation
  let orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

  let rentalOrder = {
    number: orderNumber,
    business: businessId,
    user: userId,
    equipment: filteredProducts.map((product) => product.id),
    totalPrice: totalPrice,
    status: "Pending",
  };
  let resultRentalOrder = await rentalOrderService.registerRentalOrder(
    rentalOrder
  );

  user.rentalOrders.push(resultRentalOrder._id);

  await userService.updateUser(userId, user);

  res.send({ status: "success", resultRentalOrder });
};

export const resolveRentalOrder = async (req, res) => {
  const resolve = req.query.resolve;
  let rentalOrder = await rentalOrderService.getRentalOrderById(req.params.oid);
  rentalOrder.status = resolve;
  let result = await rentalOrderService.resolveRentalOrder(
    rentalOrder._id,
    rentalOrder
  );
  res.send({ status: "success", result });
};
