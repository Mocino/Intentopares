import { getConnection, querys, sql } from "../database";

//mostrar campos
export const getFactura = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllFactura);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//crear campo
export const createNewFactur = async (req, res) => {
  const {IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, Consumo, Total} = req.body;
  let {  } = req.body;

  // validating
  if (IdCliente == null || IdEmpleado == null || LecturaActual == null ||
    LecturaAntigua == null || FechaEmision == null || IdObservacion == null
    || Consumo == null || Total == null
    ) {
    return res.status(400).json({ msg: "Campos Incompletos!" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("Total", sql.Float, Total)
      .input("Consumo", sql.Float, Consumo)
      .input("IdObservacion", sql.INT, IdObservacion)
      .input("FechaEmision", sql.Date, FechaEmision)
      .input("LecturaAntigua", sql.INT, LecturaAntigua)
      .input("LecturaActual", sql.INT, LecturaActual)
      .input("IdEmpleado", sql.INT, IdEmpleado)
      .input("IdCliente", sql.INT, IdCliente)
      .query(querys.addNewFactur, );

    res.json({IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, Consumo, Total });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//consultar campo por ID
export const getFacturById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(querys.getFacturaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar campo por ID
export const deleteFacturById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(querys.deleteFactur);
      
    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Mostrar el total de campo
export const getTotalFactura = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalFacturas);
  console.log(result);
  res.json(result.recordset[0][""]);
};

//Actualizar el campo
export const updateFacturById = async (req, res) => {
  const {IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, Consumo, Total} = req.body;
  // validating
  if (IdCliente == null || IdEmpleado == null || LecturaActual == null ||
      LecturaAntigua == null || FechaEmision == null || IdObservacion == null
      || Total == null || Consumo == null 
    ) 
  {
    return res.status(400).json({ msg: "Campos Incompletos" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Total", sql.Float, Total)
      .input("Consumo", sql.Float, Consumo)
      .input("IdObservacion", sql.INT, IdObservacion)
      .input("FechaEmision", sql.Date, FechaEmision)
      .input("LecturaAntigua", sql.INT, LecturaAntigua)
      .input("LecturaActual", sql.INT, LecturaActual)
      .input("IdEmpleado", sql.INT, IdEmpleado)
      .input("IdCliente", sql.INT, IdCliente) 
      .input("Id", req.params.Id)
      .query(querys.updateFacturById);
    res.json({ IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, Consumo, Total});
  } catch (error) {
    res.status(500);
    res.send(error.message);  
  }
};