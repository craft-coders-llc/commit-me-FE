import "./HomePage.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
function Homepage() {
  return (
    <section className="main-section">
      <div className="main-section_container">
        <div className="main-section_info">
          <h1 className="main-section_text">
            Eventos en vivo, sin importar tu stack
          </h1>

          <Button
            type="button"
            className="btn  btn-lg"
            text="Quiénes somos"
            to={"/about"}
          />
        </div>
        <img
          className="main-section_image"
          src="/img/evento_4.jpg"
          alt="imagen de evento tech"
        />
      </div>
    </section>
  );
}

export default Homepage;
