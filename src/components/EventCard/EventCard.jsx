import { useEffect, useState } from "react";
import mockData from "../../data/mockData";
import "./EventCard.css";

function EventCard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(mockData);
  }, []);

  if (!events) return <p>Cargando</p>;

  return (
    <section>
      {events.map((event) => (
        <div className="card" key={event.id}>
          <img className="card-img" src={event.img} />
          <h1 className="card-title">{event.name}</h1>
          <p className="card-text">{event.description.slice(0, 50)}... </p>
          <span className="card_date">{event.date}</span>
          <span className="card_location">{event.location}</span>
        </div>
      ))}
    </section>
  );
}

export default EventCard;
