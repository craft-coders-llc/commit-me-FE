import { useState } from "react";
import "./LoginForm.css";
import { logIn } from "../../services/getApiHook";

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const usernameRegex = /^[a-zA-Z0-9]{4,12}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("login");
const userData=logIn({username:username,password:password})
console.log(userData);

/*const isUsernameValid = usernameRegex.test(username);
  const isPasswordValid = passwordRegex.test(password);

  setUsernameValid(isUsernameValid);
  setPasswordValid(isPasswordValid);
  setValidated(true);

  if(isUsernameValid && isPasswordValid){
    alert("Login realizado con éxito")
  }*/
}






  return (
    <form onSubmit={handleSubmit}className="login-form">
      <div className="mb-3">
        <label htmlFor="validationCustomUsername" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustomUsername"
          aria-describedby="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control pssw"
          id="inputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
