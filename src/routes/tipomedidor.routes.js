//rutas de acceso
//get
import { Router } from "express";
import {
  getTipomedidor,
  createNewTipomedido,
  getTipomedidoById,
  deleteTipomedidoById,
  getTotalTipomedidor,
  updateTipomedidoById,
} from "../controllers/tipomedidor.controller";

const router = Router();

router.get("/tipomedidor", getTipomedidor);

router.post("/tipomedidor", createNewTipomedido);

router.get("/tipomedidor/count", getTotalTipomedidor);

router.get("/tipomedidor/:id", getTipomedidoById);

router.delete("/tipomedidor/:id", deleteTipomedidoById);

router.put("/tipomedidor/:id", updateTipomedidoById);

export default router;