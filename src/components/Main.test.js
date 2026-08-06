window.fetchAPI = jest.fn(() => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
]);

import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns available booking times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
});

test("updateTimes returns available booking times", () => {
  expect(updateTimes([], "2026-08-05")).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
});
