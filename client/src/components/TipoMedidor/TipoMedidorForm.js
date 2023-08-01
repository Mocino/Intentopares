import { Button, Card, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function TipoMedidorForm(){

  const [tipomedidor, setTipomedidor] = useState({
    TipoMedidor: '',
  })
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true)

    if(editing) {
        await fetch(`http://localhost:4000/api/tipomedidor/${params.Id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tipomedidor),
      });
    } else {
        await fetch("http://localhost:4000/api/tipomedidor",{
        method: "POST",
        body: JSON.stringify(tipomedidor),
        headers: { "Content-Type": "application/json"},
      });
    }

    setLoading(false)
    navigate('/ver/TipoMedidor')
  }

  const handleVerTipoMedidor = () => {
    navigate('/ver/TipoMedidor');
  };


  const handleChange = e => {
    setTipomedidor({ ...tipomedidor, [e.target.name]: e.target.value})
  }

  const loadtipomedidor = async (Id) => {
    const res = await fetch (`http://localhost:4000/api/tipomedidor/${Id}`)
    const data = await res.json()
    setTipomedidor({TipoMedidor: data.TipoMedidor})
    setEditing(true)
  }

  useEffect(()=> {
    console.log(params);
    if(params.Id){
      loadtipomedidor(params.Id)
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
            {editing? "Editar Datos del Medidor" : "Añadir nuevo tipo de medidor"}
             </Typography>
             
              <form onSubmit={handleSubmit}>

                <TextField
                  variant='outlined'
                  label='Nombre del Medidor'
                  sx={{
                    display: 'block',
                    margin: '.5rem 0'
                  }}

                  name = "TipoMedidor"
                  value={tipomedidor.TipoMedidor}
                  onChange={handleChange}
                  inputProps={{style: {color: "white"}}}
                  InputLabelProps={{style: {color: "white"}}}
                />


            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: '10px' }}
                    onClick={handleVerTipoMedidor}
                  >
                    Configuración
                  </Button>
      
                  <Button 
                      variant='contained' 
                      color='secondary' 
                      type='submit'
                      disabled = {!tipomedidor.TipoMedidor}>
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
