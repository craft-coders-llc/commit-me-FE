import { useParams } from "react-router-dom";
import mockData from "../../data/mockData"; 

const EventDetailsPage = () => {
  const { id } = useParams();

  const event = mockData.find((item) => item.id === parseInt(id));

  if (!event) {
    return (
      <h2 className="text-center mt-5 text-white">Evento no disponible</h2>
    );
  }

  return (
    <div className="container mt-5 text-white">
      <h1 className="text-center">{event.name}</h1>
      <h3 className="text-center text-info">{event.date}</h3>

      <div className="text-center mt-4">
        <img
          src={event.img}
          alt={event.name}
          className="img-fluid rounded"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="mt-4">
        <h4>Detalles del Evento</h4>
        <ul>
          <li>
            <strong>Ubicación:</strong> {event.location}
          </li>
          <li>
            <strong>Organiza:</strong> {event.organizer}
          </li>
          <li>
            <strong>Duración:</strong> {event.duration}
          </li>
          <li>
            <strong>Modalidad:</strong> {event.mode}
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Descripción</h4>
        <p>{event.description}</p>
      </div>

      <div className="mt-4">
        <h4>Contacto</h4>
        <p>
          Email: <a href={`mailto:${event.email}`}>{event.email}</a>
        </p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
