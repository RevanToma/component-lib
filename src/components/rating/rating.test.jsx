import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Rating from "./Rating";

test("should render Rating with default number of stars", () => {
  render(<Rating />);

  const stars = screen.getAllByTestId("star");
  expect(stars.length).toBe(5);
});

test("should render Rating with custom number of stars", () => {
  render(<Rating number={3} />);

  const stars = screen.getAllByTestId("star");
  expect(stars.length).toBe(3);
});

test("should select the correct star when clicked", () => {
  render(<Rating />);

  const stars = screen.getAllByTestId("star");

  fireEvent.click(stars[2]);
});
