import { Button, Card, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function ObservacionForm(){

  const [Observacion, setObservacion] = useState({
    Id: '', // Agrega la propiedad Id
    Descripcion: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true)

    if (editing) {
      await fetch(`http://localhost:4000/api/observacion/${params.Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Observacion),
      });
    } else {
      await fetch("http://localhost:4000/api/observacion", {
        method: "POST",
        body: JSON.stringify(Observacion),
        headers: { "Content-Type": "application/json" },
      });
    }
    

    setLoading(false)
    navigate('/ver/observacion')
  }

  const handleVerObservacion = () => {
    navigate('/ver/Observacion');
  };


  const handleChange = e => {
    setObservacion({ ...Observacion, [e.target.name]: e.target.value})
  }

  const loadObservacion = async (Id) => {
    const res = await fetch(`http://localhost:4000/api/observacion/${Id}`)
    const data = await res.json()
    setObservacion({ Id: data.Id, Descripcion: data.Descripcion }) // Incluye la propiedad Id en el estado
    setEditing(true)
  }
  

  useEffect(()=> {
    console.log(params);
    if(params.Id){
      loadObservacion(params.Id)
    }
  }, [params.id])

  return(
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >

        <Grid item xs ={3}>
          <Card
            sx={{ mt: 5 }} 
            style={{
              backgroundColor: "#1e272e",
              padding: "1rem"
            }}>

            <Typography variant='h5' textAlign='center' color='white' style={{ marginBottom: '2rem' }}> 
            {editing? "Editar Observaciones" : "Añadir nueva Observacion"}
             </Typography>
              <form onSubmit={handleSubmit}>

                <TextField
                  variant='outlined'
                  label='Descripcion'
                  sx={{
                    display: 'block',
                    margin: '.5rem 0'
                  }}

                  name = "Descripcion"
                  value={Observacion.Descripcion}
                  onChange={handleChange}
                  inputProps={{style: {color: "white"}}}
                  InputLabelProps={{style: {color: "white"}}}
                />



            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={handleVerObservacion}
              >
                Configuración
              </Button>
  
              <Button 
                  variant='contained' 
                  color='secondary' 
                  type='submit'
                  disabled = {!Observacion.Descripcion}>
                    {loading ? (
                      <CircularProgress color="inherit" size={24}/>
                    ) : (
                      editing? "Guardar Cambios" : "Guardar"
                    )}
                  </Button>
            </div>




              </form>
          </Card>
        </Grid>
    </Grid>
  )
}
