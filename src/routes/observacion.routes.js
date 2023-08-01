//rutas de acceso
//get
import { Router } from "express";
import {
  getObservacion,
  createNewObservacio,
  getObservacioById,
  deleteObservacioById,
  getTotalObservacion,
  updateObservacioById,
} from "../controllers/observacion.controller";

const router = Router();

router.get("/observacion", getObservacion);

router.post("/observacion", createNewObservacio);

router.get("/observacion/count", getTotalObservacion);

router.get("/observacion/:id", getObservacioById);

router.delete("/observacion/:id", deleteObservacioById);

router.put("/observacion/:id", updateObservacioById);

export default router;