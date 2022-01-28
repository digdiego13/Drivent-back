import { Request, Response } from "express";

export async function get(req: Request, res: Response) {
  const eventTypes = [
    { id: 0, name: "Presencial", price: 250 },
    { id: 1, name: "Online", price: 100 }
  ];
  res.send(eventTypes);
}
