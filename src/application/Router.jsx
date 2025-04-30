import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/HomePage";
import EventCard from "../components/EventCard/EventCard";
import AboutPage from "../pages/AboutPage/AboutPage";
import EventDetailsPage from "../pages/EventDetailPage/EventDetailPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import Header from "../components/header/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event-detail" element={<EventDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
