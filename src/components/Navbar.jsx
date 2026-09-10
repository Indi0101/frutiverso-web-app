import { Link } from "react-router-dom";

function Navbar({carrito})
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">🥝 Frutiverso</Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">  
              <Link className="nav-link" to="/carrito">🧺Carrito({carrito.length})</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;
