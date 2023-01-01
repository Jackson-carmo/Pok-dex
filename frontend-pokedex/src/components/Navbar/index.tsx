import "./styles.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const logo: string = require("../../assets/img/logo.svg").default;
  const name_logo: string = require("../../assets/img/nome_logo.svg").default;

  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo" />
          <img src={name_logo} alt="NameLogo" className="logo-name" />
        </div>
        <div className="search-nav">
        <Link to={'/search'} className="btn-search">
            <button><BsSearch /></button>
            </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
