import "./style.css";
import logo from "../../assets/logo.svg";
import logoHome from "../../assets/homepage.svg";

function HomePage({ setIsHomePage }) {
  return (
    <div className="homePage">
      <div>
        <img src={logo} alt="logo" id="logohome"></img>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button
          type="button"
          id="buttonstart"
          onClick={() => setIsHomePage("Dashboard")}
        >
          Iniciar
        </button>
      </div>
      <img src={logoHome} alt="homepage"></img>
    </div>
  );
}

export default HomePage;
