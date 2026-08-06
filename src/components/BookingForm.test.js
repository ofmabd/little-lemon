import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const renderBookingForm = () =>
  render(
    <BookingForm
      availableTimes={[
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
      ]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

test("Renders the BookingForm label", () => {
  renderBookingForm();

  const label = screen.getByText("Choose date");
  expect(label).toBeInTheDocument();
});

test("Date input is required", () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeRequired();
});

test("Guests input has correct min and max", () => {
  renderBookingForm();

  const guestsInput = screen.getByLabelText("Number of guests");

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "12");
});

test("Submit button is disabled when form is invalid", () => {
  renderBookingForm();

  const submitButton = screen.getByDisplayValue("Make Your Reservation");

  expect(submitButton).toBeDisabled();
});