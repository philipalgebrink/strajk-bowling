import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Menu from "./pages/Menu";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
