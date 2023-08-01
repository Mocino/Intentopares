import {useEffect, useState} from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function TipoClienteList() {

  const [tipoclientes, setTipoclientes] = useState([])
  const navigate = useNavigate()

  const loadTipoclientes = async() => {
    const response = await fetch('http://localhost:4000/api/tipocliente')
    const data = await response.json()
    setTipoclientes(data)
  }

  const handleDelete = async (Id) => {
      await fetch(`http://localhost:4000/api/tipocliente/${Id}`, {
      method: "DELETE",
    })
    setTipoclientes(tipoclientes.filter((tipoclientes) => tipoclientes.Id !== Id));
  }

  useEffect(() => {
    loadTipoclientes()
  }, [])

  return (
    <>
      <h1>Lista de Tipo Cliente</h1>
      {
      tipoclientes.map((tipoclientes) => (
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
                Nombre de la tarifa:
            </Typography>
            <Typography style={{ marginLeft: '1em' }}>{tipoclientes.TipoTarifa}</Typography>
            
            <Typography variant="subtitle1" fontWeight="bold">
                Precio de la tarifa:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{tipoclientes.Precio}</Typography>
          </div>
          

          <div>
            <Button
                  variant='contained' 
                  color='inherit' 
                  onClick={()=> navigate(`/TipoCliente/${tipoclientes.Id}/edit`)}
            >
              Editar
            </Button>

            <Button
                  variant='contained' 
                  color='warning' 
                  onClick={()=> handleDelete(tipoclientes.Id)}
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


