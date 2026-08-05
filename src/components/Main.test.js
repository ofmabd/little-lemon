import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the expected times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
});

test("updateTimes returns the same state", () => {
  const state = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  expect(updateTimes(state, "2026-08-05")).toEqual(state);
});