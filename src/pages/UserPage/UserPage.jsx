import "./UserPage.css";
import Avatar from "../../components/Avatar/Avatar";
import ButtonEdit from "../../components/ButtonEdit/ButtonEdit";
import EventCard from "../../components/EventCard/EventCard";

function UserPage() {
    return (
      <>
        <div className="profile-section">
          <Avatar />
          <div className="user-info">
            <div className="nickname-edit">
              <h1 className="nickname">BATMAN</h1>
              <ButtonEdit />
            </div>
            <h2 className="user-name">Bruce Wayne</h2>
          </div>
        </div>
        <div className="events-section">
            <div className="events-category">
            <h2>EVENTOS CREADOS:</h2>
            <h2>EVENTOS GUARDADOS:</h2>
            </div>
            <div className="event-cards">
            <EventCard />
            <EventCard/>
            </div>
          
        </div>
      </>
    );
  }
  

export default UserPage;
