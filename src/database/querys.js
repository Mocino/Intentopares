export const querys = {
  
//hacemos las consultas aca este de product
    //Get (muestra todos los campos)
    getAllProducts: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Products]",
    //muestra los registros por ID como parametro
    getProducById: "SELECT * FROM Products Where Id = @Id",
    //Agreamos nuevo campo a la db
    addNewProduct:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    //eliminar un campo
    deleteProduct: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Products] WHERE Id= @Id",
    //contabilizar los campos
    getTotalProducts: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Products",
    //actualizar un campo por su id
    updateProductById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  
 //hacemos las consultas aca este de tipocliente
 getAllTipocliente: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Tipocliente]",
 addNewTipoclient:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Tipocliente] (TipoTarifa, Precio) VALUES (@TipoTarifa,@Precio);",
 getTipoclienById: "SELECT * FROM Tipocliente Where Id = @Id",
 deleteTipoclient: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Tipocliente] WHERE Id= @Id",
 getTotalTipoclientes: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Tipocliente",
 updateTipoclientById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Tipocliente] SET TipoTarifa = @TipoTarifa, Precio = @Precio WHERE Id = @id",
 

  //hacemos las consultas aca este de tipomedidor
  getAllTipomedidor: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Tipomedidor]",
  addNewTipomedido:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Tipomedidor] (TipoMedidor) VALUES (@TipoMedidor);",
  getTipomedidById: "SELECT * FROM Tipomedidor Where Id = @Id",
  deleteTipomedido: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Tipomedidor] WHERE Id= @Id",
  getTotalTipomedidors: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Tipomedidor",
  updateTipomedidoById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Tipomedidor] SET TipoMedidor = @TipoMedidor WHERE Id = @id",
  
  //hacemos las consultas aca este de Cliente
  getAllCliente: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Cliente]",
  addNewCliente:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Cliente] (Nombre, Nis, Direccion, Email, Telefono, IdTipoCliente, IdTipoMedidor, NumeroContador) VALUES (@Nombre,@Nis, @Direccion, @Email, @Telefono, @IdTipoCliente, @IdTipoMedidor, @NumeroContador);",
  getClientById: "SELECT * FROM Cliente Where Id = @Id",
  deleteCliente: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Cliente] WHERE Id= @Id",
  getTotalClientes: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Cliente",
  updateClienteById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Cliente] SET Nombre = @Nombre, Nis = @Nis, Direccion = @Direccion, Email = @Email, Telefono = @Telefono, IdTipoCliente = @IdTipoCliente, IdTipoMedidor = @IdTipoMedidor, NumeroContador = @NumeroContador WHERE Id = @id",

    //hacemos las consultas aca este de empleado
    getAllEmpleado: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Empleado]",
    addNewEmpleado:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Empleado] (Nombre, Email, Contraseña) VALUES (@Nombre, @Email,@Contraseña);",
    getEmpleadById: "SELECT * FROM Empleado Where Id = @Id",
    deleteEmpleado: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Empleado] WHERE Id= @Id",
    getTotalEmpleados: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Empleado",
    updateEmpleadoById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Empleado] SET Nombre = @Nombre, Email = @Email, Contraseña = @Contraseña WHERE Id = @id",


     //hacemos las consultas aca este de observacion
 getAllObservacion: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Observacion]",
 addNewObservacio:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Observacion] (Descripcion) VALUES (@Descripcion);",
 getObservacionById: "SELECT * FROM Observacion Where Id = @Id",
 deleteObservacio: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Observacion] WHERE Id= @Id",
 getTotalObservacions: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Observacion",
 updateObservacioById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Observacion] SET Descripcion = @Descripcion WHERE Id = @id",
 
//hacemos las consultas aca este de facturacion
getAllFactura: "SELECT TOP(500) * FROM [FacturaEnergiaElectrica].[dbo].[Factura]",
addNewFactur:"INSERT INTO [FacturaEnergiaElectrica].[dbo].[Factura] (IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, Consumo, Total) VALUES (@IdCliente, @IdEmpleado, @LecturaActual, @LecturaAntigua, @FechaEmision, @IdObservacion, @Consumo, @Total);",
getFacturaById: "SELECT * FROM Factura Where Id = @Id",
deleteFactur: "DELETE FROM [FacturaEnergiaElectrica].[dbo].[Factura] WHERE Id = @Id",
getTotalFacturas: "SELECT COUNT(*) FROM FacturaEnergiaElectrica.dbo.Factura",
updateFacturById:"UPDATE [FacturaEnergiaElectrica].[dbo].[Factura] SET IdCliente = @IdCliente, IdEmpleado = @IdEmpleado, LecturaActual = @LecturaActual, LecturaAntigua = @LecturaAntigua, FechaEmision = @FechaEmision, IdObservacion = @IdObservacion, Consumo = @Consumo, Total = @Total WHERE Id = @Id",
};



