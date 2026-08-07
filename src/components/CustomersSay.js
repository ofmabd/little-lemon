import "./CustomersSay.css";

const testimonials = [
  {
    name: "Sarah M.",
    rating: "★★★★★",
    review:
      "The food was incredible and the atmosphere was warm and welcoming. We'll definitely be back!",
  },
  {
    name: "James T.",
    rating: "★★★★★",
    review:
      "One of the best Mediterranean restaurants in Chicago. Fresh ingredients and excellent service.",
  },
  {
    name: "Carmen P.",
    rating: "★★★★★",
    review:
      "Everything was delicious! The Greek Salad and Lemon Dessert were my favorites.",
  },
  {
    name: "Michael B.",
    rating: "★★★★★",
    review:
      "Amazing food, friendly staff, and a beautiful dining experience. Highly recommended.",
  },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((review) => (
            <article key={review.name} className="testimonial-card">
              <div className="rating">{review.rating}</div>

              <div className="profile">
                <div className="avatar">
                  {review.name.charAt(0)}
                </div>

                <h3>{review.name}</h3>
              </div>

              <p>{review.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;