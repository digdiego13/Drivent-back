import Ticket from "@/entities/Ticket";
import TicketData from "@/interfaces/ticketData";
import { getRepository } from "typeorm";

async function makePayment({
  ticketType,
  thereIsHotel,
  totalPrice,
  userId,
}: TicketData) {
  const paymentAlreadyDone = await getRepository(Ticket).findOne({
    where: { userId },
  });

  if (!paymentAlreadyDone) {
    const ticket = getRepository(Ticket).create({
      ticketType,
      thereIsHotel,
      totalPrice,
      userId,
    });
    await ticket.save();
  }

  return "ok";
}

async function getPaymentInfo(userId: number) {
  const paymentInfo = await getRepository(Ticket).findOne({
    where: { userId },
  });

  return paymentInfo;
}

export { makePayment, getPaymentInfo };
