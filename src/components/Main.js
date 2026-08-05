import { Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

function Main() {
    return (
    <main>
       <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </main>
    );
}

export default Main;