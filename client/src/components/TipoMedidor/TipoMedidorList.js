import {useEffect, useState} from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function TipoMedidorList() {

  const [tipomedidors, setTipomedidors] = useState([])
  const navigate = useNavigate()

  const loadTipomedidor = async() => {
    const response = await fetch('http://localhost:4000/api/tipomedidor')
    const data = await response.json()
    setTipomedidors(data)
  }
 
  const handleDelete = async (Id) => {
      await fetch(`http://localhost:4000/api/tipomedidor/${Id}`, {
      method: "DELETE",
    })
    setTipomedidors(tipomedidors.filter((tipomedidor) => tipomedidor.Id !== Id));
  }

  useEffect(() => {
    loadTipomedidor()
  }, [])

  return (
    <>
      <h1>Lista de medidores</h1>
      {
      tipomedidors.map((tipomedidors) => (
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
                Tipo del medidor:
              </Typography>
              <Typography style={{ marginLeft: '1em' }}>{tipomedidors.TipoMedidor}</Typography>
          </div>
          

          <div>
            <Button
                  variant='contained' 
                  color='inherit' 
                  onClick={()=> navigate(`/TipoMedidor/${tipomedidors.Id}/edit`)}
            >
              Editar
            </Button>

            <Button
                  variant='contained' 
                  color='warning' 
                  onClick={()=> handleDelete(tipomedidors.Id)}
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


