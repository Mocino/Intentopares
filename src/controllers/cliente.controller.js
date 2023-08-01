import { getConnection, querys, sql } from "../database";

//mostrar campos
export const getCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllCliente);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//crear campo
export const createNewClient = async (req, res) => {
  const { NumeroContador, IdTipoMedidor, IdTipoCliente, Telefono, Email, Direccion, Nis, Nombre } = req.body;
  let {  } = req.body;

  // validating
  if (NumeroContador == null || IdTipoMedidor == null || IdTipoCliente == null
    || Telefono == null || Email == null || Direccion == null || Nis == null
    || Nombre == null ) {
    return res.status(400).json({ msg: "Campos Incompletos!" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("NumeroContador", sql.Int, NumeroContador)
      .input("IdTipoMedidor", sql.Int, IdTipoMedidor)
      .input("IdTipoCliente", sql.Int, IdTipoCliente)
      .input("Telefono", sql.Int, Telefono)
      .input("Email", sql.VarChar, Email)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Nis", sql.Int, Nis)
      .input("Nombre", sql.VarChar, Nombre)
      .query(querys.addNewCliente, );

    res.json({ Nombre, Nis , Direccion, Email , Telefono, IdTipoCliente, IdTipoMedidor, NumeroContador  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//consultar campo por ID
export const getClientById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getClientById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar campo por ID
export const deleteClientById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteCliente);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Mostrar el total de campo
export const getTotalCliente = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalClientes);
  console.log(result);
  res.json(result.recordset[0][""]);
};

//Actualizar el campo
export const updateClientById = async (req, res) => {
  const { NumeroContador, IdTipoMedidor, IdTipoCliente, Telefono, Email, Direccion, Nis, Nombre } = req.body;

  // validating
  if (NumeroContador == null || IdTipoMedidor == null || IdTipoCliente == null
    || Telefono == null || Email == null || Direccion == null || Nis == null
    || Nombre == null 
    ) {
    return res.status(400).json({ msg: "Campos Incompletos" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("NumeroContador", sql.Int, NumeroContador)
      .input("IdTipoMedidor", sql.Int, IdTipoMedidor)
      .input("IdTipoCliente", sql.Int, IdTipoCliente)
      .input("Telefono", sql.Int, Telefono)
      .input("Email", sql.VarChar, Email)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Nis", sql.Int, Nis)
      .input("Nombre", sql.VarChar, Nombre)
      .input("id", req.params.id)
      .query(querys.updateClienteById);
    res.json({ Nombre, Nis , Direccion, Email , Telefono, IdTipoCliente, IdTipoMedidor, NumeroContador});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};