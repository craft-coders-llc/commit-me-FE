import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/HomePage";
import EventCard from "../components/EventCard/EventCard";
import AboutPage from "../pages/AboutPage/AboutPage";
import Header from "../components/header/Header";
import EventDetailsPage from "../pages/EventDetailPage/EventDetailPage";
import EventsList from "../components/EventsList/EventsList";


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pruebas" element={<EventsList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event-detail" element={<EventDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
