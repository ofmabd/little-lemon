import "./OrderOnlinePage.css";

import Fish from "../images/fish.jpg";
import VodkaPenne from "../images/vodkapenne.jpg";

function OrderOnlinePage() {
  return (
    <section className="order-page">
      <div className="container order-content">
        <div className="order-text">
          <h1>Order Online</h1>

          <p>
            Enjoy your favorite Little Lemon dishes from the comfort of your
            home. Place your order by phone for pickup or delivery and we'll
            prepare your meal fresh to order.
          </p>

          <div className="order-info">
            <h3>Hours</h3>
            <p>Monday – Sunday</p>
            <p>11:00 AM – 10:00 PM</p>

            <h3>Phone</h3>
            <p>(312) 555-1234</p>
          <a href="tel:3125551234">
            <button aria-label="Call Little Lemon">
              Call to Order
            </button>
          </a>
          </div>
        </div>

        <div className="order-images">
          <img src={Fish} alt="Grilled Fish" />
          <img src={VodkaPenne} alt="Vodka Penne Pasta" />
        </div>
      </div>
    </section>
  );
}

export default OrderOnlinePage;