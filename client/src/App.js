import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TaskForm from './components/Empleado/TaskForm'
import TaskList from './components/Empleado/TaskList'

import TipoClienteForm from './components/TipoCliente/TipoClienteForm'
import TipoclienteList from './components/TipoCliente/TipoClienteList'

import TipoMedidorForm from './components/TipoMedidor/TipoMedidorForm'
import TipoMedidorList from './components/TipoMedidor/TipoMedidorList'

import ClientForm from './components/Cliente/ClienteForm'
import ClientList from './components/Cliente/ClienteList'

import ObservacionForm from './components/Observacion/ObservacionForm'
import ObservacionList from './components/Observacion/ObservacionList'

import FacturaForm from './components/Factura/FacturaForm' 
import FacturaList from './components/Factura/FacturaList'



import Menu from "./components/Navbar"
import {Container} from '@mui/material'

export default function App() {
  return (
    <BrowserRouter>
     <Menu />
      <Container>
          <Routes>

            <Route path="/ver/empleado" element={<TaskList/>}/>
            <Route path="/task/new" element={<TaskForm/>}/>
            <Route path="/task/:Id/edit" element={<TaskForm/>}/>

            <Route path="/ver/TipoCliente" element={<TipoclienteList/>}/>
            <Route path="/TipoCliente/new" element={<TipoClienteForm/>}/>
            <Route path="/TipoCliente/:Id/edit" element={<TipoClienteForm/>}/>

            <Route path="/ver/TipoMedidor" element={<TipoMedidorList/>}/>
            <Route path="/TipoMedidor/new" element={<TipoMedidorForm/>}/>
            <Route path="/TipoMedidor/:Id/edit" element={<TipoMedidorForm/>}/>

            <Route path="/ver/Cliente" element={<ClientList/>}/>
            <Route path="/Cliente/new" element={<ClientForm/>}/>
            <Route path="/Cliente/:Id/edit" element={<ClientForm/>}/>

            <Route path="/ver/Observacion" element={<ObservacionList/>}/>
            <Route path="/Observacion/new" element={<ObservacionForm/>}/>
            <Route path="/Observacion/:Id/edit" element={<ObservacionForm/>}/>

            <Route path="/ver/Factura" element={<FacturaList/>}/>
            <Route path="/Factura/new" element={<FacturaForm/>}/>
            <Route path="/Factura/:Id/edit" element={<FacturaForm/>}/>

          </Routes>
        </Container>
    </BrowserRouter>
  );
}