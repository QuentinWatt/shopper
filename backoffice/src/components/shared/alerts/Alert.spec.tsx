import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert", () => {
  it("renders with prop children", () => {
    render(<Alert>There was an error</Alert>);
    expect(screen.getByText(/There was an error/i)).toBeInTheDocument();
  });
});
