import  "./ButtonEdit.css"
import { useNavigate } from "react-router-dom";

function ButtonEdit({ to = "/", type = "button", className = "button-edit", alt = "Edit", imgSrc = "/img/white_icon.png" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={handleClick}
    >
      <img src={imgSrc} alt={alt} className="edit-icon" />
    </button>
  );
}

export default ButtonEdit;
