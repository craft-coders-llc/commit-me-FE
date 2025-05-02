import "../ContactPage/contactPage.css";
import Button from "../../components/button/Button";


const ContactPage = () => {
  return (
    <div className="container contact-section d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-5 border-info rounded text-center"
        style={{
          backgroundColor: "#4B006E",
          color: "white",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2 className="fw-bold mb-4">Contáctanos</h2>
        <p>
          mándanos un mail{" "}
          <a href="mailto:email@email.com" className="text-white">
            email@email.com
          </a>
        </p>
        <p>llámanos al 666 666 666</p>
        <p>o deja tu consulta aquí</p>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Escribe tu consulta..."
          ></textarea>
        </div>

        <div className="text-center d-flex justify-content-center">
          <Button type="submit" className="btn-enviar" text="Enviar"/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

