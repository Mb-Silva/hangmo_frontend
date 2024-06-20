import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { logout, getUser } from "../api/gameService";

function Conta() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGetUser = async () => {
    const user = await getUser();
    return user;
  }

  useEffect(() => {
    document.title = "HANGMO - Conta";
    const fetchUserData = async () => {
      try {
        const user = await getUser();
        setEmail(user.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogout = () => {
    // Store a mock authentication token in localStorage
    logout();
    navigate("/Login");
  };

  const handleButtonClick = () => {
    navigate('/mudar-senha');
  };

  return (
    <div className="App">
      <Link to="./hangmogame">
        <img className="logo" src={logo} alt="Logo hangmo" />
      </Link>

      <div className="container">
        <div className="row">
          <div
            className="col-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Informações da Conta</h2>
            <label>Email: </label>
            <input
              className="infom"
              type="email"
              value={email}
              onChange={handleInputChange}
              disabled
            />
            <div style={{ marginTop: "20px" }}>
              <button type="button" style={{ marginRight: "20px" }} onClick={handleButtonClick}>
                Mudar senha
              </button>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conta;
