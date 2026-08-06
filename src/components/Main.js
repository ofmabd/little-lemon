/* global fetchAPI, submitAPI */

import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";
import ConfirmedBooking from "./ConfirmedBooking";

export function initializeTimes() {
    const today = new Date();
    return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  return window.fetchAPI(new Date(action));
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(formData) {
    if (submitAPI(formData)) {
        navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;