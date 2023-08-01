//rutas de acceso
//get
import { Router } from "express";
import {
  getTipocliente,
  createNewTipoclient,
  getTipoclientById,
  deleteTipoclientById,
  getTotalTipocliente,
  updateTipoclientById,
} from "../controllers/tipocliente.controller";

const router = Router();

router.get("/tipocliente", getTipocliente);

router.post("/tipocliente", createNewTipoclient);

router.get("/tipocliente/count", getTotalTipocliente);

router.get("/tipocliente/:id", getTipoclientById);

router.delete("/tipocliente/:id", deleteTipoclientById);

router.put("/tipocliente/:id", updateTipoclientById);

export default router;