import "./HomePage.css";

function Homepage() {
  return (
    <section className="main-section">
      <div className="main-section_intro">
        <div className="coso">
          <h1 className="main-text">Eventos en vivo, sin importar tu stack</h1>
          <button type="button" className="btn  btn-lg">
            Quiénes somos
          </button>
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
