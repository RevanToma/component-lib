import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("should render Counter with default value", () => {
  render(<Counter />);
  const counterText = screen.getByText("Counter: 0");
  expect(counterText).toBeInTheDocument();
});

test("should render Counter with custom color", () => {
  render(<Counter color="blue" />);
  const counterText = screen.getByText("Counter: 0");
  expect(counterText).toHaveStyle("color: blue");
});

test("should increment counter value when '+' button is clicked", () => {
  render(<Counter />);
  const addButton = screen.getByRole("button", { name: "+" });

  fireEvent.click(addButton);

  const counterText = screen.getByText("Counter: 1");
  expect(counterText).toBeInTheDocument();
});

test("should decrement counter value when '-' button is clicked", () => {
  render(<Counter />);
  const subtractButton = screen.getByRole("button", { name: "-" });

  fireEvent.click(subtractButton);

  const counterText = screen.getByText("Counter: -1");
  expect(counterText).toBeInTheDocument();
});
