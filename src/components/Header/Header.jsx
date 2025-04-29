import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../public/img/logo.svg";
import lupa from "../../../public/img/lupaBuscador.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Commit-me Logo" className="logo" />
        </NavLink>

        <div className="navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                Explorar Eventos
              </NavLink>
            </li>
            <li className="nav-item"> 
              <NavLink className="nav-link" to="/about">
                Sobre Nosotras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registration">
                Registro
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                <img src={lupa} alt="Buscar" className="lupa-icon" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Iniciar Sesión
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
