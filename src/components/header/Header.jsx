import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

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

        <div className="d-flex align-items-end">
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
          <div className="d-flex align-items-end ms-auto">
            <ul className="navbar-nav  me-0 gap-1">
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

              {isAuthenticated ? (
                <li className="nav-item desktop-perfil">
                  <NavLink
                    className="nav-link"
                    to="/perfil"
                    onClick={() => setIsOpen(false)}
                  >
                    Perfil
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    onClick={() => setIsOpen(false)}
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
