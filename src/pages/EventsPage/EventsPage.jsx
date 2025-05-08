import Footer from "../../components/footer/Footer";
import EventsList from "../../components/EventsList/EventsList";
import Button from "../../components/button/Button";
import "../EventsPage/EventsPage.css";
import FilterEvents from "../../components/FilterEvents/FilterEvents";

function EventsPage() {
  return (
    <section>
      <EventsList />
      <Button
        type="button"
        className="custom-button btn-lg next-btn"
        text="Siguiente"
      />
    </section>
  );
}

export default EventsPage;
