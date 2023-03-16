import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Accordion from "./Accordion";

const data = [
  {
    title: "Accordion Title 1",
    content: "Accordion Content 1",
  },
  {
    title: "Accordion Title 2",
    content: "Accordion Content 2",
  },
];

describe("Accordion", () => {
  test("renders accordion with correct data", () => {
    render(<Accordion data={data} />);
    data.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("expands and collapses accordion item when clicked", () => {
    render(<Accordion data={data} />);
    const accordionTitle = screen.getByText(data[0].title);
    fireEvent.click(accordionTitle);

    expect(screen.getByText(data[0].content)).toBeInTheDocument();
    fireEvent.click(accordionTitle);
  });

  test("accordion item contains correct content", () => {
    render(<Accordion data={data} />);
    const accordionTitle = screen.getByText(data[0].title);
    fireEvent.click(accordionTitle);

    expect(screen.getByText(data[0].content)).toBeInTheDocument();
  });
});
