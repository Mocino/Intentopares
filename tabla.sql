CREATE DATABASE FacturaEnergiaElectrica;
USE FacturaEnergiaElectrica


select * from Tipocliente

DELETE FROM Cliente;
DELETE FROM Empleado;
DELETE FROM Factura;
DELETE FROM Observacion;
DELETE FROM Tipocliente;
DELETE FROM Tipomedidor;



-- Insertar datos en la tabla Tipocliente
INSERT INTO Tipocliente (TipoTarifa, Precio)
VALUES ('Residencial', 10.50),
       ('Industria', 12.75),
       ('R Tipo A', 8.90);

-- Insertar datos en la tabla Tipomedidor
INSERT INTO Tipomedidor (TipoMedidor)
VALUES ('Medidor 1'),
       ('Medidor 2'),
       ('Medidor 3');

-- Insertar datos en la tabla Cliente
INSERT INTO Cliente (Nombre, Nis, Direccion, Email, Telefono, IdTipoCliente, IdTipoMedidor, NumeroContador)
VALUES ('Cliente 1', 123456789, 'Dirección 1', 'cliente1@example.com', 987654321, 1, 1, 123),
       ('Cliente 2', 987654321, 'Dirección 2', 'cliente2@example.com', 123456789, 2, 2, 456),
       ('Cliente 3', 555555555, 'Dirección 3', 'cliente3@example.com', 999999999, 3, 3, 789);

-- Insertar datos en la tabla Empleado
INSERT INTO Empleado (Nombre, Email, Contraseña)
VALUES ('Empleado 1', 'empleado1@example.com', 'contraseña1'),
       ('Empleado 2', 'empleado2@example.com', 'contraseña2'),
       ('Empleado 3', 'empleado3@example.com', 'contraseña3');

-- Insertar datos en la tabla Observacion
INSERT INTO Observacion (Descripcion)
VALUES ('Observación 1'),
       ('Observación 2'),
       ('Observación 3');

-- Insertar datos en la tabla Factura
INSERT INTO Factura (IdCliente, IdEmpleado, LecturaActual, LecturaAntigua, FechaEmision, IdObservacion, Consumo, Total)
VALUES (1, 1, 100, 50, '2023-05-01', 1, 50, 525.00),
       (2, 2, 200, 150, '2023-05-02', 2, 50, 637.50),
       (3, 3, 300, 200, '2023-05-03', 3, 100, 890.00);

CREATE TABLE Tipocliente (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    TipoTarifa VARCHAR(100),
    Precio decimal(10, 2)
);

CREATE TABLE Tipomedidor (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    TipoMedidor VARCHAR(100)
);

CREATE TABLE Cliente (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100),
    Nis INT,
    Direccion VARCHAR(100),
    Email VARCHAR(100),
    Telefono INT,
    IdTipoCliente INT,
    IdTipoMedidor INT,
    NumeroContador INT,
	FOREIGN KEY (IdTipoCliente) REFERENCES Tipocliente(Id),
	FOREIGN KEY (IdTipoMedidor) REFERENCES Tipomedidor(Id)
);

CREATE TABLE Empleado (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100),
    Email VARCHAR(100),
    Contraseña VARCHAR(100)
);

CREATE TABLE Observacion (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Descripcion VARCHAR(100)
);


CREATE TABLE Factura (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    IdCliente INT,
    IdEmpleado INT,
    LecturaActual INT,
    LecturaAntigua INT,
    FechaEmision DATE,
    IdObservacion INT,
	Consumo INT,
	Total decimal(10, 2)
	
	FOREIGN KEY (IdCliente) REFERENCES Cliente(Id),
	FOREIGN KEY (IdEmpleado) REFERENCES Empleado(Id),
	FOREIGN KEY (IdObservacion) REFERENCES Observacion(Id)
);