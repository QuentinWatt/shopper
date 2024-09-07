import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";

vi.mock("@/icons/CaretLeftIcon", () => ({
  default: () => <div data-testid="caret-left"></div>,
}));

vi.mock("@/icons/CaretRightIcon", () => ({
  default: () => <div data-testid="caret-right"></div>,
}));

describe("Navigation", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  it("contains a logo", () => {
    expect(screen.getByTestId("shopper-square-logo")).toBeInTheDocument();
  });

  it("has an expand/contract button", () => {
    expect(screen.getByTestId("menu-expand-button")).toBeInTheDocument();
  });

  it("changes the arrow on the button", () => {
    const toggleButton = screen.getByTestId("menu-expand-button");
    expect(screen.getByTestId("caret-right")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("caret-left")).toBeInTheDocument();
  });

  it("expands the logo when the button is clicked", () => {
    expect(screen.queryByTestId("shopper-full-logo")).not.toBeInTheDocument();
    const button = screen.getByTestId("menu-expand-button");
    fireEvent.click(button);
    expect(screen.queryByTestId("shopper-full-logo")).toBeInTheDocument();
  });
});
