import "./MenuPage.css";

import GreekSalad from "../images/greeksalad.jpg";
import Bruschetta from "../images/bruschetta.jpg";
import LemonDessert from "../images/lemondessert.jpg";
import Fish from "../images/fish.jpg";
import VodkaPenne from "../images/vodkapenne.jpg";

function MenuPage() {
  return (
    <section className="menu-page">
      <div className="container">
        <h1>Our Menu</h1>
        <p className="menu-intro">
          Explore some of Little Lemon's most popular Mediterranean dishes,
          prepared fresh every day with quality ingredients.
        </p>

        <div className="menu-grid">
          <article className="menu-card">
            <img src={GreekSalad} alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <span>$12.99</span>
            <p>
              Crisp lettuce, tomatoes, cucumbers, olives, feta cheese, and our
              signature house dressing.
            </p>
          </article>

          <article className="menu-card">
            <img src={Bruschetta} alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <span>$8.99</span>
            <p>
              Toasted artisan bread topped with fresh tomatoes, basil, garlic,
              olive oil, and parmesan.
            </p>
          </article>

          <article className="menu-card">
            <img src={Fish} alt="Grilled Fish" />
            <h3>Grilled Fish</h3>
            <span>$21.99</span>
            <p>
              Fresh grilled fish served with seasonal vegetables and lemon herb
              butter.
            </p>
          </article>

          <article className="menu-card">
            <img src={VodkaPenne} alt="Vodka Penne" />
            <h3>Vodka Penne</h3>
            <span>$17.99</span>
            <p>
              Penne pasta tossed in a creamy tomato vodka sauce and finished
              with parmesan cheese.
            </p>
          </article>

          <article className="menu-card">
            <img src={LemonDessert} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <span>$6.99</span>
            <p>
              Homemade lemon cake served with whipped cream and fresh citrus
              zest.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MenuPage;