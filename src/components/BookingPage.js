import "./BookingPage.css";

import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <div className="container booking-container">
        <div className="booking-info">
          <h1>Reserve a Table</h1>

          <p>
            Reserve your table online and enjoy an authentic Mediterranean
            dining experience at Little Lemon. Whether you're celebrating a
            birthday, anniversary, graduation, or simply enjoying dinner with
            family and friends, we're excited to welcome you.
          </p>

          <ul>
            <li>✓ Fresh Mediterranean cuisine</li>
            <li>✓ Indoor & outdoor seating</li>
            <li>✓ Reservations available daily</li>
            <li>✓ Perfect for special occasions</li>
          </ul>
        </div>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;