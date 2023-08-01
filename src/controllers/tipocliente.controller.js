import { getConnection, querys, sql } from "../database";

//mostrar campos
export const getTipocliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTipocliente);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//crear campo
export const createNewTipoclient = async (req, res) => {
  const { TipoTarifa , Precio } = req.body;
  let {  } = req.body;

  // validating
  if (TipoTarifa == null || Precio == null) {
    return res.status(400).json({ msg: "Campos Incompletos!" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("TipoTarifa", sql.VarChar, TipoTarifa)
      .input("Precio", sql.Decimal, Precio)
      .query(querys.addNewTipoclient, );

    res.json({ TipoTarifa, Precio,  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//consultar campo por ID
export const getTipoclientById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getTipoclienById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar campo por ID
export const deleteTipoclientById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteTipoclient);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Mostrar el total de campo
export const getTotalTipocliente = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalTipoclientes);
  console.log(result);
  res.json(result.recordset[0][""]);
};

//Actualizar el campo
export const updateTipoclientById = async (req, res) => {
  const { Precio, TipoTarifa } = req.body;

  // validating
  if (Precio == null || TipoTarifa == null) {
    return res.status(400).json({ msg: "Campos Incompletos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("TipoTarifa", sql.VarChar, TipoTarifa)
      .input("Precio", sql.Decimal, Precio)
      .input("id", req.params.id)
      .query(querys.updateTipoclientById);
    res.json({ TipoTarifa, Precio,  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};