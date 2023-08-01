//rutas de acceso
//get
import { Router } from "express";
import {
  getEmpleado,
  createNewEmplead,
  getEmpleadById,
  deleteEmpleadById,
  getTotalEmpleado,
  updateEmpleadById,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/empleado", getEmpleado);

router.post("/empleado", createNewEmplead);

router.get("/empleado/count", getTotalEmpleado);

router.get("/empleado/:id", getEmpleadById);

router.delete("/empleado/:id", deleteEmpleadById);

router.put("/empleado/:id", updateEmpleadById);

export default router;