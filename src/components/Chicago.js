import "./Chicago.css";

import Owners from "../images/owners.jpg";
import Owner2 from "../images/owner2.jpg";

function Chicago() {
  return (
    <section className="about">
      <div className="container about-content">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of Chicago. Founded by two passionate chefs, Mario and
            Adrian, our restaurant combines traditional Mediterranean recipes
            with modern culinary techniques to create an unforgettable dining
            experience.
          </p>

          <p>
            From fresh ingredients to exceptional hospitality, every meal is
            prepared with care. Whether you're joining us for lunch, dinner, or
            a special celebration, we look forward to welcoming you.
          </p>
        </div>

        <div className="about-images">
          <img
            src={Owners}
            alt="Mario and Adrian at Little Lemon"
            className="about-img about-img-front"
          />

          <img
            src={Owner2}
            alt="Little Lemon chefs"
            className="about-img about-img-back"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;