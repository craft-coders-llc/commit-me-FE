import Footer from "../../components/footer/Footer";
import EventsList from "../../components/EventsList/EventsList";
import Button from "../../components/button/Button";
import "../EventsPage/EventsPage.css";
import FilterEvents from "../../components/FilterEvents/FilterEvents";

function EventsPage() {
  return (
    <section>
      <FilterEvents/>
      <EventsList />
      <Button type="button" className="btn btn-lg next-btn" text="Siguiente" />

      <Footer />
    </section>
  );
}

export default EventsPage;
