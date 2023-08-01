//rutas de acceso
//get
import { Router } from "express";
import {
  getCliente,
  createNewClient,
  getClientById,
  deleteClientById,
  getTotalCliente,
  updateClientById,
} from "../controllers/cliente.controller";

const router = Router();

router.get("/cliente", getCliente);

router.post("/cliente", createNewClient);

router.get("/cliente/count", getTotalCliente);

router.get("/cliente/:id", getClientById);

router.delete("/cliente/:id", deleteClientById);

router.put("/cliente/:id", updateClientById);

export default router;