import { getConnection, querys, sql } from "../database";

//mostrar campos
export const getObservacion = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllObservacion);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//crear campo
export const createNewObservacio = async (req, res) => {
  const { Descripcion } = req.body;
  let {  } = req.body;

  // validating
  if (Descripcion == null) {
    return res.status(400).json({ msg: "Campos Incompletos!" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("Descripcion", sql.VarChar, Descripcion)
      .query(querys.addNewObservacio, );

    res.json({ Descripcion  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//consultar campo por ID
export const getObservacioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getObservacionById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar campo por ID
export const deleteObservacioById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteObservacio);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Mostrar el total de campo
export const getTotalObservacion = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalObservacions);
  console.log(result);
  res.json(result.recordset[0][""]);
};

//Actualizar el campo
export const updateObservacioById = async (req, res) => {
  const { Descripcion } = req.body;

  // validating
  if (Descripcion == null) {
    return res.status(400).json({ msg: "Campos Incompletos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Descripcion", sql.VarChar, Descripcion)
      .input("id", req.params.id)
      .query(querys.updateObservacioById);
    res.json({ Descripcion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};