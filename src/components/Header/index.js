import "./style.css";
import logo2 from "../../assets/logo2.svg";

function Header({ setIsHomePage }) {
  return (
    <header className="header">
      <img src={logo2} alt="logo"></img>
      <button type="button" onClick={() => setIsHomePage("HomePage")}>
        Início
      </button>
    </header>
  );
}

export default Header;
