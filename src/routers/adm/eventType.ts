import { Router } from "express";

import * as controller from "@/controllers/adm/eventType";

const router = Router();

router.get("/", controller.get);

export default router;
