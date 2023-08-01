//rutas de acceso
//get
import { Router } from "express";
import {
  getFactura,
  createNewFactur,
  getFacturById,
  deleteFacturById,
  getTotalFactura,
  updateFacturById,
} from "../controllers/factura.controller";

const router = Router();

  
router.get("/factura", getFactura);

router.post("/factura", createNewFactur);

router.get("/factura/count", getTotalFactura);

router.get("/factura/:id", getFacturById);

router.delete("/factura/:id", deleteFacturById);

router.put("/factura/:id", updateFacturById);

export default router;