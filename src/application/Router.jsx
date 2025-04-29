import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Homepage from "../pages/Homepage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sobre-nosotras" element={<AboutPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
