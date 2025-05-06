import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css"
function LoginPage(){
  return (
    <section className="loginform-container">
      <h1 className="page-title">Inicia Sesión</h1>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
