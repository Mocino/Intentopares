import { useState, useEffect } from 'react';
import { Autocomplete, Button, Card, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClienteForm() {
  const [cliente, setCliente] = useState({
    Nombre: '',
    Nis: '',
    Direccion: '',
    Email: '',
    Telefono: '',
    IdTipoCliente: '',
    IdTipoMedidor: '',
    NumeroContador: '',
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const [numeroContadorError, setNumeroContadorError] = useState(false);
  const [nisError, setNisError] = useState(false);
  const [telefonoError, setTelefonoError] = useState(false);


  const [tiposCliente, setTiposCliente] = useState([]);
  const [tiposMedidor, setTiposMedidor] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (editing) {
      await fetch(`http://localhost:4000/api/cliente/${params.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });
    } else {
      await fetch('http://localhost:4000/api/cliente', {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    setLoading(false);
    navigate('/ver/cliente');
  };

  const handleVerCliente = () => {
    navigate('/ver/cliente');
  };


  const handleChange = (event, value) => {
    const { name, value: inputValue } = event.target;
    const newValue = value ? value.Id : inputValue;
    setCliente((prevCliente) => ({ ...prevCliente, [name]: newValue }));

    // Validación de número de contador
    if (name === 'NumeroContador') {
      if (!/^\d+$/.test(inputValue)) {
        setNumeroContadorError(true);
      } else {
        setNumeroContadorError(false);
      }
    }

    // Validación de Nis
    if (name === 'Nis') {
      if (!/^\d+$/.test(inputValue)) {
        setNisError(true);
      } else {
        setNisError(false);
      }
    }

    // Validación de teléfono
    if (name === 'Telefono') {
      if (!/^\d+$/.test(inputValue)) {
        setTelefonoError(true);
      } else {
        setTelefonoError(false);
      }
    }
  };
  
  const handleTipoClienteChange = (value) => {
    setCliente((prevCliente) => ({ ...prevCliente, IdTipoCliente: value ? value.Id : '' }));
  };
  
  const handleTipoMedidorChange = (value) => {
    setCliente((prevCliente) => ({ ...prevCliente, IdTipoMedidor: value ? value.Id : '' }));
  };
  
  const loadCliente = async (id) => {
    const res = await fetch(`http://localhost:4000/api/cliente/${id}`);
    const data = await res.json();
    setCliente(data);
    setEditing(true);
  };

  useEffect(() => {
    if (params.Id) {
      loadCliente(params.Id);
    }
  }, [params.Id]);

  useEffect(() => {
    // Cargar los datos de los tipos de cliente desde la API
    fetch('http://localhost:4000/api/tipocliente')
      .then((response) => response.json())
      .then((data) => {
        setTiposCliente(data);
      });

    // Cargar los datos de los tipos de medidor desde la API
    fetch('http://localhost:4000/api/tipomedidor')
      .then((response) => response.json())
      .then((data) => {
        setTiposMedidor(data);
      });
  }, []);

 // Resto del código anterior...

return (
  <Grid container direction="column" alignItems="center" justifyContent="center" >
    <Grid item xs={3}>
      <Card
        sx={{ mt: 5 }}
        style={{
          backgroundColor: '#1e272e',
          padding: '1rem',
        }}
      >
        <Typography variant="h5" textAlign="center" color="white" style={{ marginBottom: '2rem' }}>
          {editing ? 'Editar Datos de Cliente' : 'Añadir Nuevo Cliente'}
        </Typography>
        <form onSubmit={handleSubmit}>
          
          <TextField
            variant='outlined'
            label='Nombre del Cliente'
            sx={{
              display: 'block',
              margin: '.5rem 0'
            }}
            name="Nombre"
            value={cliente.Nombre}
            onChange={handleChange}
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
          />

            <TextField
              variant="outlined"
              label="Nis del Cliente"
              sx={{ display: 'block', margin: '.5rem 0' }}
              name="Nis"
              value={cliente.Nis}
              onChange={handleChange}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
              error={nisError}
              helperText={nisError ? 'Ingrese solo números' : ''}
            />

          <TextField
            variant='outlined'
            label='Direccion del Cliente'
            sx={{
              display: 'block',
              margin: '.5rem 0'
            }}
            name="Direccion"
            value={cliente.Direccion}
            onChange={handleChange}
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          
          <TextField
            variant='outlined'
            label='Email del Cliente'
            sx={{
              display: 'block',
              margin: '.5rem 0'
            }}
            name="Email"
            value={cliente.Email}
            onChange={handleChange}
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
          />

            <TextField
              variant="outlined"
              label="Teléfono del Cliente"
              sx={{ display: 'block', margin: '.5rem 0' }}
              name="Telefono"
              value={cliente.Telefono}
              onChange={handleChange}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
              error={telefonoError}
              helperText={telefonoError ? 'Ingrese solo números' : ''}
            />


<Autocomplete
  options={tiposCliente}
  getOptionLabel={(option) => option.TipoTarifa}
  value={tiposCliente.find((option) => option.Id === cliente.IdTipoCliente) || null}
  onChange={(event, value) => handleTipoClienteChange(value)}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      label="IdTipoCliente"
      sx={{
        display: 'block',
        margin: '.5rem 0'
      }}
      name="IdTipoCliente"
      inputProps={{ ...params.inputProps, style: { color: 'white' } }}
      InputLabelProps={{ style: { color: 'white' } }}
    />
  )}
/>

<Autocomplete
  options={tiposMedidor}
  getOptionLabel={(option) => option.TipoMedidor}
  value={tiposMedidor.find((option) => option.Id === cliente.IdTipoMedidor) || null}
  onChange={(event, value) => handleTipoMedidorChange(value)}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      label="IdTipoMedidor"
      sx={{
        display: 'block',
        margin: '.5rem 0'
      }}
      name="IdTipoMedidor"
      inputProps={{ ...params.inputProps, style: { color: 'white' } }}
      InputLabelProps={{ style: { color: 'white' } }}
    />
  )}
/>


            <TextField
              variant="outlined"
              label="Número de Contador"
              sx={{ display: 'block', margin: '.5rem 0' }}
              name="NumeroContador"
              value={cliente.NumeroContador}
              onChange={handleChange}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
              error={numeroContadorError}
              helperText={numeroContadorError ? 'Ingrese solo números' : ''}
            />


            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={handleVerCliente}
              >
                Configuración
              </Button>
  
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={
                  !cliente.Nombre ||
                  !cliente.Nis ||
                  !cliente.Direccion ||
                  !cliente.Email ||
                  !cliente.Telefono ||
                  !cliente.IdTipoCliente ||
                  !cliente.IdTipoMedidor ||
                  !cliente.NumeroContador
                }
              >
                {loading ? <CircularProgress color="inherit" size={24} /> : editing ? 'Guardar Cambios' : 'Guardar'}
              </Button>
            </div>



        </form>
      </Card>
    </Grid>
  </Grid>
);
          }