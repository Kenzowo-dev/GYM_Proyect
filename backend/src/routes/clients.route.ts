import { Router } from "express";
import { getClients, getClientByIdController, createClientController } from "../controllers/clients.controller.js";

const router = Router();

router.get("/", getClients);
router.get("/:id", getClientByIdController);
router.post("/",createClientController)

export default router;