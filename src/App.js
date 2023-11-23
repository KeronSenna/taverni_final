import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componentes/Login y Registro/Login';
import ListaProductos from './componentes/ListaProductos/ListaProductos';
import DetalleProducto from './componentes/DetalleProducto/DetalleProducto';
import Registro from './componentes/Login y Registro/Registro';
// import MiComponente from './MiComponente';

function App() {
  return (
    <>
      <BrowserRouter basename="/taverni_final">
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/ListaProductos" element={<ListaProductos />} />
          <Route path="/DetalleProducto/:id" element={<DetalleProducto />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* function App() {
  return (
    <>
      <div className="App">
        <h1> Mi web con React </h1>
        <Home />
        <Ejemplo />
        <Footer />
      </div>
      
    </>
  );
} */

export default App;
