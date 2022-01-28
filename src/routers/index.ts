import { Router } from "express";

import clientRouter from "@/routers/client";
import admRouter from "./adm/adm";
const router = Router();

router.use("/", clientRouter);
router.use("/adm", admRouter);

export default router;
