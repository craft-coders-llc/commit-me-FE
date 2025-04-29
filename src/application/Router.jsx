import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import Header from "../components/header/Header";


function Router() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sobre-nosotras" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
