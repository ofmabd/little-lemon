import { Link } from "react-router-dom";
import restaurant from "../images/restaurant.jpg";

function CallToAction() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist. Enjoy fresh,
            authentic flavors in a warm and welcoming atmosphere.
          </p>

          <Link to="/booking">
            <button aria-label="Reserve a Table">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src={restaurant}
            alt="Little Lemon restaurant interior"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;