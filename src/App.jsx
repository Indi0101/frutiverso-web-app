import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './components/app.css'
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import { useState } from "react";
import Sidebar from './components/Sidebar';

function App() {
  const [carrito, setCarrito] = useState([]);
 return (
  <>
    <Router>
      <Navbar carrito={carrito} />
      <div className="d-flex">
  
        <div className="container-fluid mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/productos" element={<Catalogo carrito = {carrito} setCarrito={setCarrito} />} />
          <Route path="/carrito" element={<Carrito carrito = {carrito}  setCarrito={setCarrito} />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/qsomos" element={<h2 className="text-center mt-4">🙋‍♀️ Conocenos</h2>} />
        </Routes>
        </div>
      </div>
    </Router>
   
    
    
    </>
  );
}

export default App
