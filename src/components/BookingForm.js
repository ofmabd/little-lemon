import "./BookingForm.css";
import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid =
    date !== "" &&
    guests >= 1 &&
    guests <= 12 &&
    occasion !== "" &&
    time !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        required
        min={new Date().toISOString().split("T")[0]}
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(e.target.value);
        }}
      />

      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="12"
        required
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Graduation</option>
        <option>Other</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
        aria-label="Make Your Reservation"
        className="submit-btn"
      />
    </form>
  );
}

export default BookingForm;