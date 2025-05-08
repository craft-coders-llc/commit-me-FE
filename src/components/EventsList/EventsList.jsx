import EventCard from "../EventCard/EventCard";
import  "./EventsList.css"

function EventsList() {
  const cards = Array.from({ length: 15 });

  return (
    <ul>
      <li>
        {cards.map((_, index) => (
          <EventCard key={index} />
        ))}
      </li>
    </ul>
  );
}

export default EventsList;
