import "./AboutPage.css";
import logo from "../../../public/img/logo.svg";

const AboutPage = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">Sobre Nosotras</h1>

      <img src={logo} alt="Commit-me" className="about-logo" />

      <p className="about-text">
        <strong>Commmit-me</strong> es una iniciativa creada por mujeres y
        personas no binarias con el objetivo de construir un espacio accesible,
        seguro e inclusivo en el mundo de la tecnología. Nos unimos desde
        distintas trayectorias, impulsadas por el deseo de aprender, compartir y
        transformar realidades a través del conocimiento colectivo y el trabajo
        en red. Fomentamos la participación activa en tecnología desde una
        perspectiva diversa, rompiendo barreras de entrada para que más personas
        puedan explorar, experimentar y crecer dentro de esta industria.
      </p>

      <h3 className="about-subtitle">Nuestra Filosofía</h3>
      <p className="about-text">
        En <strong>Commit-me</strong>, creemos que la tecnología es una
        herramienta poderosa para el cambio social. No se trata solo de aprender
        a programar, sino de crear oportunidades, tejer redes de apoyo y
        construir un entorno donde cada persona pueda desarrollarse sin miedo a
        ser quien es. Nuestra filosofía se basa en tres pilares: <br /> <br />
        <strong>Colaboración antes que competencia:</strong> aprendemos mejor
        cuando creamos juntas. <br />
        <strong>Accesibilidad y empatía:</strong> cada camino es distinto, y
        celebramos todas las formas de llegar. <br />
        <strong>Compromiso social:</strong> lo que hacemos con la tecnología
        importa, y queremos que sirva para transformar positivamente nuestras
        comunidades.
      </p>

      <h3 className="about-subtitle">Contáctanos</h3>
      <p className="about-contact">
        📍 <strong>Oficina:</strong> Paseo de Gracia, Barcelona, España <br />
        📞 <strong>Teléfono:</strong> +34 789 456 789 <br />
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:info@commitme.com" style={{ color: "#31C1B8" }}>
          info@commitme.com
        </a>
      </p>
    </div>
  );
};

export default AboutPage;
