import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Primary, Red } from "./Button.stories";
test("should render button", () => {
  const label = "Click me!";
  render(<Button label={label} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toBeInTheDocument();
});

test("should render Primary Button", () => {
  render(<Primary {...Primary.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--primary");
});

test("should render red Button", () => {
  render(<Red {...Red.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveStyle("background-color: red");
});
