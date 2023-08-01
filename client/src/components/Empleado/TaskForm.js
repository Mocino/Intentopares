import { Button, Card, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm(){

  const [task, setTask] = useState({
    Nombre: '',
    Email: '',
    Contraseña: ''
  })
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true)

    if(editing) {
        await fetch(`http://localhost:4000/api/empleado/${params.Id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    } else {
        await fetch("http://localhost:4000/api/empleado",{
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json"},
      });
    }

    setLoading(false)
    navigate('/ver/empleado')
  }

  const handleVerEmpleados = () => {
    navigate('/ver/empleado');
  };

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value})
  }

  const loadTasks = async (Id) => {
    const res = await fetch (`http://localhost:4000/api/empleado/${Id}`)
    const data = await res.json()
    setTask({Nombre: data.Nombre, Email: data.Email, Contraseña: data.Contraseña})
    setEditing(true)
  }

  useEffect(()=> {
    console.log(params);
    if(params.Id){
      loadTasks(params.Id)
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
          <Typography variant="h5" textAlign="center" color="white" style={{ marginBottom: '2rem' }} >
            {editing ? 'Editar Datos de Factura' : 'Añadir Nuevo Empleado'}
          </Typography>
  
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              label="Nombre del empleado"
              sx={{
                display: 'block',
                margin: '.5rem 0'
              }}
              name="Nombre"
              value={task.Nombre}
              onChange={handleChange}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
  
            <TextField
              variant="outlined"
              label="Email del empleado"
              sx={{
                display: 'block',
                margin: '.5rem 0'
              }}
              name="Email"
              value={task.Email}
              onChange={handleChange}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
  
            <TextField
              variant="outlined"
              label="Contraseña del empleado"
              sx={{
                display: 'block',
                margin: '.5rem 0'
              }}
              name="Contraseña"
              value={task.Contraseña}
              onChange={handleChange}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
  
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={handleVerEmpleados}
              > 
                Configuración
              </Button>
  
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={!task.Nombre || !task.Email || !task.Contraseña}
                style={{ marginRight: '10px' }}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  editing ? 'Guardar Cambios' : 'Guardar'
                )}
              </Button>
            </div>
          </form>
        </Card>
      </Grid>
    </Grid>
  );  
}
