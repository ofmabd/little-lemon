import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];
}

function updateTimes(state, action) {
    return state;
}

function Main() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

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
                    />
                }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </main>
    );
}

export default Main;