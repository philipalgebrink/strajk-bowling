import React, { useState } from "react";
import { createBooking } from "../api/bookingApi";
import { BookingRequest } from "../types/models";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext"; // Use useBooking here
import "./Booking.css";
import logo from "../assets/logo.svg";
import navicon from "../assets/navicon.svg";

const Booking: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [lanes, setLanes] = useState(1);
  const [people, setPeople] = useState(1);
  const [shoes, setShoes] = useState<number[]>([]);
  const navigate = useNavigate();
  const { setBooking } = useBooking(); // Use the hook to get setBooking

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (shoes.length !== people) {
      alert("The number of shoe sizes must match the number of players.");
      return;
    }

    const when = `${date}T${time}`;
    const bookingData: BookingRequest = { when, lanes, people, shoes };

    navigate("/loading");

    try {
      const response = await createBooking(bookingData);
      setBooking(response); // Save booking data to context
      navigate("/confirmation");
    } catch (error) {
      console.error("Failed to create booking:", error);
      alert("Something went wrong. Please try again.");
      navigate("/booking");
    }
  };

  const handleAddShoeSize = () => setShoes((prev) => [...prev, 0]);

  return (
    <div className="booking-page">
      <img
        src={navicon}
        alt="Menu"
        className="navicon"
        onClick={() => navigate("/menu")}
      />
      <header className="booking-header">
        <img src={logo} alt="Strajk Bowling Logo" className="logo" />
        <h1>Booking</h1>
      </header>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="section-title">WHEN, WHAT & WHO</div>

        <div className="date-time-container">
          <div className="floating-label-container">
            <input
              type="date"
              placeholder="YYYY-MM-DD"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label>Date</label>
          </div>
          <div className="floating-label-container">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <label>Time</label>
          </div>
        </div>

        <div className="form-section">
          <div className="floating-label-container">
            <input
              type="number"
              value={people || ""}
              onChange={(e) => {
                const newValue = e.target.value ? parseInt(e.target.value) : 0;
                setPeople(newValue);
              }}
              min="1"
              required
            />
            <label>Number of awesome bowlers</label>
            <span className="suffix">pers</span>
          </div>
        </div>

        <div className="form-section">
          <div className="floating-label-container">
            <input
              type="number"
              value={lanes || ""}
              onChange={(e) => {
                const newValue = e.target.value ? parseInt(e.target.value) : 0;
                setLanes(newValue);
              }}
              min="1"
              required
            />
            <label>Number of Lanes</label>
            <span className="suffix">lane(s)</span>
          </div>
        </div>

        <div className="section-title-shoes">SHOES</div>

        <div className="shoe-section">
          <div className="shoe-section-scroll">
            {shoes.map((size, index) => (
              <div key={index} className="shoe-input">
                <div className="floating-label-container">
                  <input
                    type="number"
                    placeholder="Shoe Size"
                    value={size || ""}
                    onChange={(e) => {
                      const newSize = parseInt(e.target.value);
                      setShoes((prev) =>
                        prev.map((s, i) => (i === index ? newSize : s))
                      );
                    }}
                    required
                  />
                  <label>Shoe Size / Person {index + 1} (Euro)</label>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setShoes((prev) => prev.filter((_, i) => i !== index))
                  }
                  className="remove-shoe-button"
                >
                  -
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="add-shoe-button"
            onClick={handleAddShoeSize}
          >
            +
          </button>
        </div>

        <button type="submit" className="submit-button">
          STRIIIIKE!
        </button>
      </form>
    </div>
  );
};

export default Booking;
