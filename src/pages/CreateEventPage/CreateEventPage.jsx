import CreateEventForm from "../../components/CreateEventForm/CreateEventForm";
import "./CreateEventPage.css"
function CreateEventPage(){
  return(
    <section className="createform-container">
      <h1 className="page-title">Crea un evento</h1>
<CreateEventForm/>
    </section>
  )
}


export default CreateEventPage;
