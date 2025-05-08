import { useEffect, useState } from "react";
import mockData from "../../data/mockData";
import "./EventCard.css";

function EventCard(event) {
  const [events, setEvents] = useState([]);
  console.log (event);

  return (
    <section>
      {
        <div className="card" key={event.id}>
          <img className="card-img" src={event.event.image} />
          <h1 className="card-title">{event.event.title}</h1>
          <p className="card-text">{event.event?.description?.slice(0, 50)}... </p>
          <span className="card_date">{event.event.date}</span>
          <span className="card_location">{event.event.venue}</span>
        </div>
      }
    </section>
  );
}

export default EventCard;
