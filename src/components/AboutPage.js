import "./AboutPage.css";

import Owners from "../images/owners.jpg";
import Owner2 from "../images/owner2.jpg";

function AboutPage() {
  return (
    <section className="about-page">
      <div className="container about-page-content">
        <div className="about-page-text">
          <h1>About Little Lemon</h1>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of Chicago. Founded by brothers Mario and Adrian, our
            restaurant combines traditional Mediterranean recipes with modern
            culinary techniques to create unforgettable dining experiences.
          </p>

          <p>
            Every dish is prepared using fresh, locally sourced ingredients and
            inspired by generations of family recipes. From handcrafted
            appetizers to signature entrées and desserts, we are committed to
            delivering exceptional food and warm hospitality.
          </p>

          <p>
            Whether you're celebrating a special occasion or enjoying a casual
            meal with friends and family, we strive to make every visit one to
            remember.
          </p>
        </div>

        <div className="about-page-images">
          <img
            src={Owners}
            alt="Little Lemon owners"
            className="about-page-image"
          />

          <img
            src={Owner2}
            alt="Little Lemon chefs"
            className="about-page-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;