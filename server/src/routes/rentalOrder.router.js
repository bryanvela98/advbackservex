import { Router } from "express";
import {
  getRentalOrders,
  getRentalOrderById,
  createRentalOrder,
  resolveRentalOrder,
} from "../controller/rentalOrder.controller.js";

const router = Router();

router.get("/", getRentalOrders);
router.get("/:oid", getRentalOrderById);
router.post("/", createRentalOrder);
router.post("/", resolveRentalOrder);

export default router;
