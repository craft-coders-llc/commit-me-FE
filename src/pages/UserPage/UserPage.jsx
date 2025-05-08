import "./UserPage.css";
import Avatar from "../../components/Avatar/Avatar";
import ButtonEdit from "../../components/ButtonEdit/ButtonEdit";
import EventCard from "../../components/EventCard/EventCard";
import { useState, useEffect } from "react";
import { getAllEvents, getUserById } from "../../services/getApiHook";

function UserPage() {
    const [user,setUser] = useState([])

    useEffect(() => {
        const getUser =async () =>{
            try{
                const response = await getUserById(2);
                console.log(response);
                setUser(response);
                
            } catch(error){
                console.error("Error obteniendo ususario:", error);
            }
        };
        getUser();
    }, []);

    const [events,setEvent] = useState([])

    useEffect(() => {
        const fetchAllEvents = async () =>{
            try{
                const response = await getAllEvents();
                console.log(response);
                setEvent(response);
            } catch(error){
                console.error("Error obteniendo el evento:",error);
            }
        };
        fetchAllEvents();
    }, []);
    

    return (
      <>
        <div className="profile-section">
          <Avatar />
          <div className="user-info">
            <div className="nickname-edit">
              <h1 className="nickname">{user.username}</h1>
              <ButtonEdit />
            </div>
            <h2 className="user-name">{user.email}</h2>
          </div>
        </div>
        <div className="events-section">
            <div className="events-category">
            <h2>EVENTOS CREADOS:</h2>
            <h2>EVENTOS GUARDADOS:</h2>
            </div>
            <div className="event-cards">   
            {events.length>0 && events.map((event) => (<EventCard key={event.id}event={event}/>))
        
            }
            
            </div>
        </div>
      </>
    );
  }
  

export default UserPage;
