import "./CreateEventForm.css";
import Button from "../../components/button/Button";
import { useState } from "react";

function CreateEventForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaHora: "",
    participantes: "",
    ubicación: "",
    descripción: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="createEvent-form">
      <div className="mb-3">
        <label className="form-label">Nombre del Evento</label>
        <textarea
          className="form-control"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha y Hora</label>
        <input
          type="datetime-local"
          className="form-control"
          name="fechaHora"
          value={formData.fechaHora}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Número de participantes</label>
        <textarea
          className="form-control"
          name="participantes"
          value={formData.participantes}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Modalidad</label>
        <select
          className="form-control"
          name="modalidad"
          value={formData.modalidad}
          onChange={handleChange}
        >
          <option value="">Selecciona</option>
          <option>Presencial</option>
          <option>Online</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Ubicación</label>
        <textarea
          className="form-control"
          name="ubicación"
          value={formData.ubicacion}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          name="descripción"
          value={formData.descripcion}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label"> Elige una imagen </label>
        <input
          type="file"
          className="form-control"
          name="imagen"
          accept="image/"
          onChange={handleChange}
        />
      </div>
      <div className="submit-event-btn-container">
        <Button type="submit" text="Publicar" className="submit-event-btn" />
      </div>
    </form>
  );
}

export default CreateEventForm;
