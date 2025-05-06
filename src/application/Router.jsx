import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/HomePage";
import EventCard from "../components/EventCard/EventCard";
import AboutPage from "../pages/AboutPage/AboutPage";
import EventDetailsPage from "../pages/EventDetailPage/EventDetailPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import Header from "../components/header/Header";
import ContactPage from "../pages/ContactPage/ContactPage";
import Footer from "../components/footer/Footer";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage";
import LoginPage from "../pages/LoginPage/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event-detail" element={<EventDetailsPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<RegistrationPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
