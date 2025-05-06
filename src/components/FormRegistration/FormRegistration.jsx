import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "../../components/button/Button";
import "../FormRegistration/FormRegistration.css";

const FormRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    alert("¡Usuario registrado exitosamente!");
  };

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h2>Formulario de Registro</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label className="form-label">Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className="form-label">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="form-label">
              Selecciona una Imagen de Perfil
            </Form.Label>
            <Form.Control
              type="file"
              name="profileImage"
              onChange={handleFileChange}
              accept="image/*"
              className="form-control"
            />
          </Form.Group>

          <Button
            text="Registrar"
            type="submit"
            to=""
            className="custom-submit-btn"
          />
        </Form>
      </div>
    </div>
  );
};

export default FormRegistration;
