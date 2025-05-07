import "./User.css"
import Avatar from "../Avatar/Avatar"


function UserPage(){
  return(

    <div className="profile-section">
    <Avatar/>  
    <div className="user-info">
      <h1 className="nickname">BATMAN</h1>  
      <h2 className="user-name">Bruce Wayne</h2>
    </div>
    </div>

  );
}

export default UserPage;

