import { Router } from "express";

import * as controller from "@/controllers/client/ticket";

import schemaValidatingMiddleware from "@/middlewares/schemaValidatingMiddleware";

import paymentSchema from "@/schemas/paymentSchema";

const router = Router();

router.post(
  "/",
  schemaValidatingMiddleware(paymentSchema),
  controller.postPayment
);
router.get("/", controller.getPaymentInfos);

export default router;
