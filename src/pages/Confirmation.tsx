import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingResponse } from "../types/models";
import logo from "../assets/logo.svg";
import "./Confirmation.css";
import navicon from "../assets/navicon.svg";

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state as BookingResponse;

  if (!booking) {
    navigate("/");
    return null;
  }

  return (
    <div className="confirmation-page">
      <img
        src={navicon}
        alt="Menu"
        className="navicon"
        onClick={() => navigate("/menu")}
      />
      <img src={logo} alt="Logo" className="logo" />
      <h1>See You Soon!</h1>
      <div className="details-section">
        <h2>Booking Details</h2>
        <div className="detail-item">
          <span className="label">When</span>
          <span className="value">
            {new Date(booking.when).toLocaleString()}
          </span>
        </div>
        <div className="detail-item">
          <span className="label">Who</span>
          <span className="value">{booking.people} pers</span>
        </div>
        <div className="detail-item">
          <span className="label">Lanes</span>
          <span className="value">{booking.lanes} lane</span>
        </div>
        <div className="detail-item">
          <span className="label">Booking Number</span>
          <span className="value">{booking.id}</span>
        </div>
      </div>
      <div className="total-section">
        <span className="total-label">total</span>
        <span className="total-value">{booking.price} SEK</span>
      </div>
      <button className="confirm-button" onClick={() => navigate("/")}>
        Sweet, Let's Go!
      </button>
    </div>
  );
};

export default Confirmation;
