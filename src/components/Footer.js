import "./Footer.css";
import logo from "../logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>(312) 555-1234</p>
          <p>info@littlelemon.com</p>
        </div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>123 Lemon Street</p>
          <p>Chicago, IL 60601</p>
        </div>

        <div className="footer-column">
          <h3>Social</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>X</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;