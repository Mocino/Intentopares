import {useEffect, useState} from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function ObservacionList() {

  const [Observaciones, setObservaciones] = useState([])
  const navigate = useNavigate()

  const loadObservacion = async() => {
    const response = await fetch('http://localhost:4000/api/observacion')
    const data = await response.json()
    setObservaciones(data)
  }
 
  const handleDelete = async (Id) => {
      await fetch(`http://localhost:4000/api/observacion/${Id}`, {
      method: "DELETE",
    })
    setObservaciones(Observaciones.filter((observacion) => observacion.Id !== Id));
  }

  useEffect(() => {
    loadObservacion()
  }, [])

  return (
    <>
      <h1>Lista de Observaciones</h1>
      {
      Observaciones.map((Observaciones) => (
        <Card style={{
          marginBottom: ".7rem",
          backgroundColor: '#1e272e'
        }}>
        <CardContent style={{
          display: "flex",
          justifyContent: "space-between"
        }}
        >
          <div style={{color: 'white'}}>
             <Typography variant="subtitle1" fontWeight="bold">
                Descripcion de la observacion:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{Observaciones.Descripcion}</Typography>
          </div>
          

          <div>
            <Button
                  variant='contained' 
                  color='inherit' 
                  onClick={()=> navigate(`/Observacion/${Observaciones.Id}/edit`)}
            >
              Editar
            </Button>

            <Button
                  variant='contained' 
                  color='warning' 
                  onClick={()=> handleDelete(Observaciones.Id)}
                  style={{ marginLeft: ".5rem"}}          
            >
              Eliminar 
            </Button>
          </div>

        </CardContent>
      </Card>
      ))}
    </>
  )
}


