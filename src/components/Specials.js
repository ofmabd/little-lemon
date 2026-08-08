import "./Specials.css";
import { Link } from "react-router-dom";

import SpecialsCard from "./SpecialsCard";

import GreekSalad from "../images/greeksalad.jpg";
import Bruschetta from "../images/bruschetta.jpg";
import LemonDessert from "../images/lemondessert.jpg";

// Displays this week's featured menu specials.
function Specials() {
  return (
    <section className="specials">
      <div className="container specials-header">
        <h2>This Week's Specials</h2>

        <Link to="/menu">
            <button aria-label="View Online Menu">
                Online Menu
            </button>
        </Link>
      </div>

      <div className="container specials-grid">
        <SpecialsCard
          image={GreekSalad}
          title="Greek Salad"
          price="$12.99"
          description="Fresh lettuce, tomatoes, cucumbers, olives, feta cheese, and our homemade dressing."
        />

        <SpecialsCard
          image={Bruschetta}
          title="Bruschetta"
          price="$8.99"
          description="Grilled bread topped with fresh tomatoes, garlic, basil, olive oil, and parmesan."
        />

        <SpecialsCard
          image={LemonDessert}
          title="Lemon Dessert"
          price="$6.99"
          description="A traditional homemade lemon cake with a light citrus flavor and whipped cream."
        />
      </div>
    </section>
  );
}

export default Specials;