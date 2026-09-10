// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100vh', outline:'solid pink 1px' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Frutiverso</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link link-dark">🏠 Inicio</Link>
        </li>
        <li>
          <Link to="/productos" className="nav-link link-dark">🛒 Productos</Link>
        </li>
        <li>
          <Link to="/carrito" className="nav-link link-dark">🧺 Carrito</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link link-dark">👤 Login</Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://via.placeholder.com/32" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>Mi cuenta</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item" href="#">Perfil</a></li>
          <li><a className="dropdown-item" href="#">Configuración</a></li>
          <li><a className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Salir</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
