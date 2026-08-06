window.fetchAPI = jest.fn(() => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
]);

import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders App without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});