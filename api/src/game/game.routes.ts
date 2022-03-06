import { Router } from "express";
import * as controller from "./game.controllers";

const router = Router();

router.get("/", controller.startGame);
router.post("/move", controller.newMovement);


export default router;