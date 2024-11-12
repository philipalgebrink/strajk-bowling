import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoSub from "../assets/logo-sub.svg";
import "./Loading.css";

const Loading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/booking");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="logo-container">
        <img src={logo} alt="Strajk Bowling Logo" className="logo" />
        <img src={logoSub} alt="Strajk Bowling Subtitle" className="logo-sub" />
      </div>
    </div>
  );
};

export default Loading;
