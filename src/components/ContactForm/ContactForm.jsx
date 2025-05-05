import "../ContactForm/ContactForm.css"
import Button from "../../components/button/Button";
import { useState } from "react";


const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const maxChars = 500;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setMessage(value);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      setError("Por favor, ingresa un mensaje.");
    } else if (message.length > maxChars) {
      setError(`El mensaje no puede superar los ${maxChars} caracteres.`);
    } else {
      setError("");
      setShowModal(true); 
      setMessage(""); 
    }
  };

  const closeModal = () => {
    console.log("Cerrando modal...");
    setShowModal(false);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="contactContainer">
          <div className="contactInfo">
            <h2>Contáctanos</h2>
            <p>
              mándanos un mail{" "}
              <a href="mailto:email@email.com" className="text-white">
                email@email.com
              </a>
            </p>
            <p>llámanos al 666 666 666</p>
            <p>o deja tu consulta aquí</p>

            <textarea
              className={`textArea ${error ? "textarea-error" : ""}`}
              value={message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
            />
            <div className="charCount">
              {message.length}/{maxChars} caracteres
            </div>
            {error && <p className="errorText">{error}</p>}
          </div>

          <div className="buttonContainer">
            <Button type="submit" className="btn-enviar" text="Enviar" />
          </div>
        </div>
      </form>

      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h3>✅ ¡Mensaje enviado!</h3>
            <p>Gracias por contactarnos. Te responderemos pronto.</p>
            <Button type="button" className="btn-cerrar" text="Cerrar" onClick={closeModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;