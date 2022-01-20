import { Request, Response } from "express";
import httpStatus from "http-status";

import * as paymentService from "@/services/client/payment";
import TicketData from "@/interfaces/ticketData";

export async function postPayment(req: Request, res: Response) {
  const ticketData = req.body as TicketData;
  ticketData.userId = req.user.id;
  await paymentService.makePayment(ticketData);
  res.sendStatus(httpStatus.OK);
}

export async function getPaymentInfos(req: Request, res: Response) {
  const paymentInfo = await paymentService.getPaymentInfo(req.user.id);

  if (!paymentInfo) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }

  res.send(paymentInfo).status(httpStatus.OK);
}
