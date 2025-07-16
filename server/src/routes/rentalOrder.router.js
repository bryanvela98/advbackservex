import { Router } from "express";
import {
  getRentalOrders,
  getRentalOrderById,
  createRentalOrder,
} from "../controller/rentalOrder.controller.js";

const router = Router();

router.get("/", getRentalOrders);
router.get("/:oid", getRentalOrderById);
router.post("/", createRentalOrder);

export default router;
