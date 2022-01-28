import { Router } from "express";
import eventType from "@/routers/adm/eventType";
const admRouter = Router();

admRouter.use("/event-type", eventType);

export default admRouter;
