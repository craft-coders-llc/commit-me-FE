import { useState } from "react";
import Button from "../../components/button/Button";
import "./FilterEvents.css";

function FilterEvents({ onFilter }) {
  const [filters, setFilters] = useState({
    modality: "",
    user: "",
    eventName: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-events-container">
      <div className="filter-fields">
        <select
          name="modality"
          value={filters.modality}
          onChange={handleChange}
          className="filter-input"
        >
          <option value="">Modalidad</option>
          <option value="presencial">Presencial</option>
          <option value="online">Online</option>
          <option value="mixta">Mixta</option>
        </select>

        <input
          type="text"
          name="user"
          value={filters.user}
          onChange={handleChange}
          className="filter-input"
          placeholder="Usuario"
        />

        <input
          type="text"
          name="eventName"
          value={filters.eventName}
          onChange={handleChange}
          className="filter-input"
          placeholder="Nombre del evento"
        />

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="filter-input"
        />

        <Button type="submit" text="Filtrar" className="filter-button">
          
        </Button>
      </div>
    </form>
  );
}

export default FilterEvents;
