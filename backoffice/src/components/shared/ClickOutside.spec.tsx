import { fireEvent, render, screen } from "@testing-library/react";
import ClickOutside from "./ClickOutside";

describe("ClickOutside", () => {
  const callClickOutside = vi.fn();

  beforeEach(() => {
    render(
      <div>
        <ClickOutside onClickOutside={callClickOutside}>
          Some child content
        </ClickOutside>
        <span>some span outside</span>
      </div>
    );
  });

  it("renders with children", () => {
    expect(screen.getByText(/some child content/i)).toBeInTheDocument();
  });

  it("does not call the function if inside content is clicked", () => {
    const insideElement = screen.getByText(/some child content/i);
    fireEvent.click(insideElement);

    expect(callClickOutside).not.toHaveBeenCalled();
  });

  it("calls the clickOutside function when something outside clicked", () => {
    const outsideElement = screen.getByText(/some span outside/i);
    fireEvent.click(outsideElement);

    expect(callClickOutside).toHaveBeenCalled();
  });
});
