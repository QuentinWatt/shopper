import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";

describe("Navigation", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  it("Contains a logo", () => {
    expect(screen.getByTestId("shopper-square-logo")).toBeInTheDocument();
  });

  it("Has an expand/contract button", () => {
    expect(screen.getByTestId("menu-expand-button")).toBeInTheDocument();
  });

  it("Expands the logo when the button is clicked", () => {
    expect(screen.queryByTestId("shopper-full-logo")).not.toBeInTheDocument();

    const button = screen.getByTestId("menu-expand-button");
    fireEvent.click(button);

    expect(screen.queryByTestId("shopper-full-logo")).toBeInTheDocument();
  });
});
