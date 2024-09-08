import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  it("has a label", () => {
    render(<PasswordInput label="Password" id="password" />);
    const label = screen.getByLabelText(/Password/i);
    expect(label).toBeInTheDocument();
  });

  it("has a password input", () => {
    render(<PasswordInput label="Password" id="password" />);
    const label = screen.getByLabelText(/Password/i);
    const input = label.closest("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
  });

  it("has a toggle button", () => {
    render(<PasswordInput label="Password" id="password" />);
    expect(screen.getByTestId("show-password")).toBeInTheDocument();
  });

  it("toggles the input type", () => {
    render(<PasswordInput label="Password" id="password" />);
    const label = screen.getByLabelText(/Password/i);
    const input = label.closest("input");
    expect(input).toHaveAttribute("type", "password");

    expect(screen.getByTestId("show-password")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("show-password"));
    expect(input).toHaveAttribute("type", "text");

    waitFor(() => {
      expect(screen.getByTestId("hide-password")).toBeInTheDocument();
    });
  });
});
