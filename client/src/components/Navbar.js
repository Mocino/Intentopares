import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar()
{

  const navigate = useNavigate()

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent">
        <Container>
          <Toolbar>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: ".5rem"}}
              onClick={() => navigate("/task/new")}
            >
              Empelado
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: ".5rem"}}
              onClick={() => navigate("/tipocliente/new")}
            >
              Tipo cliente
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: ".5rem"}}
              onClick={() => navigate("/tipomedidor/new")}
            >
              Tipo medidor
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: ".5rem"}}
              onClick={() => navigate("/cliente/new")}
            >
              Cliente
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: ".5rem"}}
              onClick={() => navigate("/observacion/new")}
            >
              Observacion
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: ".5rem"}}
              onClick={() => navigate("/factura/new")}
            >
              Factura
            </Button>
            


<Typography variant="h5" style={{ position: "absolute", top: 0, right: 0 }}>
  <Link to="/" style={{ textDecoration: "none", color: "#eee", margin: ".5rem", fontWeight: "bold" }}>
    Inicio
  </Link>
</Typography>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
