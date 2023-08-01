import { Button, 
         Card, 
         CircularProgress, 
         Grid, 
         TextField, 
         Typography} from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function TipoClienteForm(){

  const [tipocliente, setTipocliente] = useState({
    TipoTarifa: '',
    Precio: '',
  })
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  if (!tipocliente.TipoTarifa || !tipocliente.Precio) {
    // Los campos son inválidos, muestra un mensaje de advertencia o realiza alguna acción adicional
    console.log('Campos inválidos');
    setLoading(false);
    return;
  }

  if (editing) {
    // Realizar la acción de actualización
    await fetch(`http://localhost:4000/api/tipocliente/${params.Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipocliente),
    });
  } else {
    // Realizar la acción de creación
    await fetch("http://localhost:4000/api/tipocliente", {
      method: "POST",
      body: JSON.stringify(tipocliente),
      headers: { "Content-Type": "application/json" },
    });
  }

  setLoading(false);
  navigate('/ver/TipoCliente');
};

const handleVerTipoCliente = () => {
  navigate('/ver/TipoCliente');
};

const [precioError, setPrecioError] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "Precio") {
    // Validar si se ingresan caracteres no numéricos o decimales inválidos
    if (!/^\d*\.?\d*$/.test(value)) {
      setPrecioError(true);
    } else {
      setPrecioError(false);
    }
  }
  setTipocliente({ ...tipocliente, [name]: value });
};


  const loadTipoCliente = async (Id) => {
    const res = await fetch (`http://localhost:4000/api/tipocliente/${params.Id}`)
    const data = await res.json()
    setTipocliente({TipoTarifa: data.TipoTarifa, Precio: data.Precio})
    setEditing(true)
  }

  useEffect(()=> {
    console.log(params);
    if(params.Id){
      loadTipoCliente(params.Id)
    }
  }, [params.id])

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem"
          }}
        >
          <Typography variant="h5" textAlign="center" color="white" style={{ marginBottom: '2rem' }}>
            {editing ? 'Editar Datos de TipoCliente' : 'Añadir Nuevo Tipo de Cliente'}
          </Typography>
  
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              label="Tipo Cliente"
              sx={{
                display: 'block',
                margin: '.5rem 0'
              }}
              name="TipoTarifa"
              value={tipocliente.TipoTarifa}
              onChange={handleChange}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
            />
  
            <TextField
              variant="outlined"
              label="Precio de tarifa"
              sx={{
                display: 'block',
                margin: '.5rem 0'
              }}
              name="Precio"
              value={tipocliente.Precio}
              onChange={handleChange}
              inputProps={{
                style: { color: "white" },
                pattern: "^\\d*\\.?\\d*$",
              }}
              InputLabelProps={{ style: { color: "white" } }}
              error={precioError}
              helperText={precioError ? "Ingrese un número decimal válido" : ""}
            />
  
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={handleVerTipoCliente}
              >
                Configuración
              </Button>
  
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={!tipocliente.TipoTarifa || !tipocliente.Precio}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  editing ? "Guardar Cambios" : "Guardar"
                )}
              </Button>
            </div>
          </form>
        </Card>
      </Grid>
    </Grid>
  );  
}
