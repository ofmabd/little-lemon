import "./ConfirmedBooking.css";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="container confirmation-card">
        <h1>Reservation Confirmed!</h1>

        <p>
          Thank you for choosing Little Lemon.
        </p>

        <p>
          Your reservation has been successfully submitted. We look forward to
          welcoming you and hope you enjoy an unforgettable Mediterranean dining
          experience.
        </p>

        <div className="confirmation-buttons">
          <Link to="/">
            <button aria-label="Return Home">
              Return Home
            </button>
          </Link>

          <Link to="/booking">
            <button aria-label="Make Another Reservation">
              Make Another Reservation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;