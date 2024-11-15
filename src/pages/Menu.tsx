import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import navicon from "../assets/navicon.svg";

const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-page">
      <img
        src={navicon}
        alt="Close Menu"
        className="navicon"
        onClick={() => navigate(-1)}
      />
      <button className="menu-button" onClick={() => navigate("/booking")}>
        Booking
      </button>
      <button className="menu-button" onClick={() => navigate("/confirmation")}>
        Confirmation
      </button>
    </div>
  );
};

export default Menu;
