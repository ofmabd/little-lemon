import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm label", () => {
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
    />
  );

  const label = screen.getByText("Choose date");

  expect(label).toBeInTheDocument();
});