import "./CreateEventForm.css";
import Button from "../../components/button/Button";
import { useState } from "react";
import { createEvent } from "../../services/getApiHook";

function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    image: "",
    categoryId: "",
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
    const userId = 1; //pasar user id a chapa aqui
    const eventData = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      image: formData.image,
      category: {
        id: parseInt(formData.categoryId),
      },
      user: {
        id: userId,
      },
    };
    console.log(eventData);
    createEvent(userId, eventData);
  };

  return (
    <form onSubmit={handleSubmit} className="createEvent-form">
      <div className="mb-3">
        <label className="form-label">Nombre del Evento</label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha</label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Hora</label>
        <input
          type="time"
          className="form-control"
          name="time"
          value={formData.time}
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
          value={formData.categoryId}
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
          name="venue"
          value={formData.venue}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          name="description"
          value={formData.description}
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
