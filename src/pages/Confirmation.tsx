import React from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext"; // Use useBooking hook
import logo from "../assets/logo.svg";
import navicon from "../assets/navicon.svg";
import "./Confirmation.css";

const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const { booking } = useBooking(); // Access booking from context

  if (!booking) {
    return (
      <div className="confirmation-page">
        <img
          src={navicon}
          alt="Menu"
          className="navicon"
          onClick={() => navigate("/menu")}
        />
        <img src={logo} alt="Logo" className="logo" />
        <h1>Booking Details Not Available</h1>
        <p>It seems you accessed this page without completing a booking.</p>
        <button className="confirm-button" onClick={() => navigate("/booking")}>
          Back to Booking
        </button>
      </div>
    );
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
