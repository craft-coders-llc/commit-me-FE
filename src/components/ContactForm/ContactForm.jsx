import "../ContactForm/ContactForm.css"
import Button from "../../components/button/Button";


const ContactForm = () => {
  return (
    <div className="formContainer">
       <div className="contactContainer">
        <div className="contactInfo">
        <h2> Contáctanos</h2>
        <p>
          mándanos un mail{" "}
          <a href="mailto:email@email.com" className="text-white">
            email@email.com
          </a>
        </p>
        <p>llámanos al 666 666 666</p>
        <p>o deja tu consulta aquí</p>
        <textarea className="textArea"></textarea>
        </div>
        
        <div className="buttonContainer">
        <Button type="submit" className="btn-enviar" text="Enviar"/>
        </div>
      
        </div>
          
      </div>
  );
};

export default ContactForm;
