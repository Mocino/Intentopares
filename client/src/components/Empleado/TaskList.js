import {useEffect, useState} from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function TaskList() {

  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  const loadTasks = async() => {
    const response = await fetch('http://localhost:4000/api/empleado')
    const data = await response.json()
    setTasks(data)
  }

  const handleDelete = async (Id) => {
      await fetch(`http://localhost:4000/api/empleado/${Id}`, {
      method: "DELETE",
    })
    setTasks(tasks.filter((task) => task.Id !== Id));
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <>
      <h1>Lista de empleados</h1>
      {
      tasks.map((tasks) => (
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
                Nombre del Empleado:
            </Typography>            
            <Typography style={{ marginLeft: '1em' }}>{tasks.Nombre}</Typography>

            <Typography variant="subtitle1" fontWeight="bold">
                Email del Empleado:
            </Typography> 
            <Typography style={{ marginLeft: '1em' }}>{tasks.Email}</Typography>

            <Typography variant="subtitle1" fontWeight="bold">
                Contraseña del Empleado:
            </Typography> 
            <Typography style={{ marginLeft: '1em' }}>{tasks.Contraseña}</Typography>
          </div>
          

          <div>
            <Button
                  variant='contained' 
                  color='inherit' 
                  onClick={()=> navigate(`/task/${tasks.Id}/edit`)}
            >
              Editar
            </Button>

            <Button
                  variant='contained' 
                  color='warning' 
                  onClick={()=> handleDelete(tasks.Id)}
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


