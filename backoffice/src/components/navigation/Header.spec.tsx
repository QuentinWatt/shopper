import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header />);
    expect(screen.getByTestId("site-header")).toBeInTheDocument();
  });

  it("has a profile button", () => {
    render(<Header />);
    expect(screen.getByTestId("profile-button")).toBeInTheDocument();
  });
});
