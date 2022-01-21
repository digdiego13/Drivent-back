import joi from "joi";

export default joi.object({
  ticketType: joi
    .string()
    .regex(/^(Presencial|Online)$/)
    .required(),
  thereIsHotel: joi.boolean().required(),
  totalPrice: joi.number().required(),
});
