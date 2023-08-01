import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ClienteList() {

  const [clientes, setClientes] = useState([]);
  
  const [tipoclientes, setTipoclientes] = useState([]);
  const [tipomedidors, setTipoMedidors] = useState([]);

  const navigate = useNavigate();

  const loadClientes = async () => {
    const response = await fetch('http://localhost:4000/api/cliente');
    const data = await response.json();
    setClientes(data);
  };

  const loadTipoclientes = async () => {
    const response = await fetch('http://localhost:4000/api/tipocliente');
    const data = await response.json();
    setTipoclientes(data);
  };

  const loadTipoMedidors = async () => {
    const response = await fetch('http://localhost:4000/api/tipomedidor');
    const data = await response.json();
    setTipoMedidors(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/api/cliente/${id}`, {
      method: 'DELETE',
    });
    setClientes(clientes.filter((cliente) => cliente.Id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/Cliente/${id}/edit`);
  };

  useEffect(() => {
    loadClientes();
    loadTipoclientes();
    loadTipoMedidors();
  }, []);

  const getTipoClienteNombre = (IdTipoCliente) => {
    const tipoCliente = tipoclientes.find((tipo) => tipo.Id === IdTipoCliente);
    return tipoCliente ? tipoCliente.TipoTarifa : '';
  };

  const getTipoMedidorNombre = (IdTipoMedidor) => {
    const tipoMedidor = tipomedidors.find((tipo) => tipo.Id === IdTipoMedidor);
    return tipoMedidor ? tipoMedidor.TipoMedidor : '';
  };

  return (
    <>
      <h1>Lista de clientes</h1>
      {clientes.map((cliente) => (
        <Card
          key={cliente.Id}
          style={{
            marginBottom: '.7rem',
            backgroundColor: '#1e272e',
          }}
        >
          <CardContent
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ color: 'white' }}>
            <Typography variant="subtitle1" fontWeight="bold">
                Nombre del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{cliente.Nombre}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Nis del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{cliente.Nis}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Direccion del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{cliente.Direccion}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Email del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{cliente.Email}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Telefono del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{cliente.Telefono}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Tipo cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{getTipoClienteNombre(cliente.IdTipoCliente)}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Medidor del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{getTipoMedidorNombre(cliente.IdTipoMedidor)}</Typography>
              
              <Typography variant="subtitle1" fontWeight="bold">
                Numero Contador del cliente:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{cliente.NumeroContador}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => handleEdit(cliente.Id)}
              >
                Editar
              </Button>

              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(cliente.Id)}
                style={{ marginLeft: '.5rem' }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
