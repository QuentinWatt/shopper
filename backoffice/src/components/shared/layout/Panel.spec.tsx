import { render, screen } from "@testing-library/react";
import Panel from "./Panel";

describe("Panel", () => {
  it("renders with children", () => {
    render(<Panel>Some text here</Panel>);
    expect(screen.getByText(/some text here/i)).toBeInTheDocument();
  });

  it("concatenates the default class and extra classes", () => {
    render(<Panel className="bg-blue-500">Some text here</Panel>);
    const element = screen.getByText(/some text here/i);
    expect(element.classList).toContain("panel");
    expect(element.classList).toContain("bg-blue-500");
  });
});
