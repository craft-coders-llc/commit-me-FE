import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          <img src="/img/logo.svg" alt="Commit-me Logo" className="logo" />
        </NavLink>

        <div className="d-flex align-items-center">
          <NavLink className="nav-link mobile-search-icon" to="/search">
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
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="d-flex align-items-center gap-3">
            <ul className="navbar-nav ms-auto me-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/events"
                  onClick={() => setIsOpen(false)}
                >
                  Explorar Eventos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nosotras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/registration"
                  onClick={() => setIsOpen(false)}
                >
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item desktop-search-icon">
                <NavLink
                  className="nav-link"
                  to="/search"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="/img/lupaBuscador.svg"
                    alt="Buscar"
                    className="lupa-icon"
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
