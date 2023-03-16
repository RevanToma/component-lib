import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FormInput from "./formInput";
const label = "label";
const name = "name";
const type = "text";
const placeholder = "write here";
test("should render formInput given label, name,type and placeholder", () => {
  render(
    <FormInput
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );

  const labelEl = screen.getByText(`${label}:`);
  expect(labelEl).toBeInTheDocument();
  const inputEl = screen.getByPlaceholderText(placeholder);
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("name", name);
  expect(inputEl).toHaveAttribute("type", type);
});

test("should update input value when typing", () => {
  render(
    <FormInput
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );

  const inputEl = screen.getByPlaceholderText(placeholder);
  fireEvent.change(inputEl, { target: { value: "New value" } });

  expect(inputEl).toHaveValue("New value");
});
