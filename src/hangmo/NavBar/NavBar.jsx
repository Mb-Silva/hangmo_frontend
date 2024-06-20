import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { logout } from "../../api/gameService";
export function NavBar({
  logo
}) {
  return <header className="navbar-menu">
    <div className="navbar-left">

      <Link to="/Conta" className="navbar-button">Conta</Link>
      <Link to="/Ranking" className="navbar-button">Ranking</Link>

    </div>
    <div className="navbar-center">  
      <Link to="./">
        <img  className="navbar-logo" src={logo} alt="Logo hangmo" />{" "}
      </Link>
    </div>
    <div className="navbar-right">

      <Link to="/Login" className="navbar-button" onClick={logout}>Logout</Link>
      

    </div>

  </header>;
}
  