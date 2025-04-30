import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/HomePage";
import EventCard from "../components/EventCard/EventCard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pruebas" element={<EventCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
