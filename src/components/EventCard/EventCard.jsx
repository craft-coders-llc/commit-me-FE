import "./EventCard.css";

function EventCard() {
  return (
    <section>
      <div className="card">
        <img className="card-img" src="/img/evento_1.png" />
        <h1 className="card-title">WOMEN IN TECH</h1>
        <p className="card-text">
          Evento destinado a la comunidad tech femenina de Barcelona.
        </p>
        <span className="card_date">29/04/2029</span>
        <span className="card_location">W hotel</span>
      </div>
    </section>
  );
}

export default EventCard;
