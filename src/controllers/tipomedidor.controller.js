import { getConnection, querys, sql } from "../database";

//mostrar campos
export const getTipomedidor = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTipomedidor);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//crear campo
export const createNewTipomedido = async (req, res) => {
  const { TipoMedidor  } = req.body;
  let {  } = req.body;

  // validating
  if (TipoMedidor == null) {
    return res.status(400).json({ msg: "Campos Incompletos!" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("TipoMedidor", sql.VarChar, TipoMedidor)
      .query(querys.addNewTipomedido, );

    res.json({ TipoMedidor });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//consultar campo por ID
export const getTipomedidoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getTipomedidById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar campo por ID
export const deleteTipomedidoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteTipomedido);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Mostrar el total de campo
export const getTotalTipomedidor = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalTipomedidors);
  console.log(result);
  res.json(result.recordset[0][""]);
};

//Actualizar el campo
export const updateTipomedidoById = async (req, res) => {
  const { TipoMedidor  } = req.body;

  // validating
  if (  TipoMedidor == null ) {
    return res.status(400).json({ msg: "Campos Incompletos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("TipoMedidor", sql.VarChar, TipoMedidor)
      .input("id", req.params.id)
      .query(querys.updateTipomedidoById);
    res.json({ TipoMedidor });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};