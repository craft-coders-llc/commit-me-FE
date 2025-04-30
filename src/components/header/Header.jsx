import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src="/img/logo.svg" alt="Commit-me Logo" className="logo" />
        </NavLink>

        <div className="d-flex align-items-center">
          {/* Lupa visible solo en mobile */}
          <NavLink to="/search" className="nav-link mobile-search-icon">
            <img
              src="/img/lupaBuscador.svg"
              alt="Buscar"
              className="lupa-icon"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
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
            {/* Lupa solo en desktop */}
            <li className="nav-item desktop-search-icon">
              <NavLink className="nav-link" to="/search">
                <img
                  src="/img/lupaBuscador.svg"
                  alt="Buscar"
                  className="lupa-icon"
                />
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
